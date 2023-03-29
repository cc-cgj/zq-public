const utils = {
    getValue(expr, vm, n = 0) {
        const arr = expr.split('.')
        if (arr.length - 1 === n) return vm[arr.at(-1)]
        return this.getValue(expr, vm[arr[n]], ++n)
    },
    setValue(expr, vm, value, n = 0) {
        const arr = expr.split('.')
        if (arr.length - 1 === n) return vm[arr.at(-1)] = value
        this.setValue(expr, vm[arr[n]], value, ++n)
    },
    model(node, expr, vm) {
        node.addEventListener('input', e => {
            this.setValue(expr, vm, e.target.value)
        })
    },
    on(node, value, vm, eventName) {
        const fn = vm.$options.methods[value]
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    text(node, value, vm) {
        let newValue
        if (value.includes('{{')) {
            const expr = value.match(/\{\{(.+)\}\}/)[1].trim()
            new Watcher(expr, vm, newValue => {
                this.textUpdator(node, newValue)
            })
            newValue = this.getValue(expr, vm)
        } else {
            newValue = this.getValue(value, vm)
        }
        this.textUpdator(node, newValue)
    },
    textUpdator(node, value) {
        node.textContent = value
    }
}

class Watcher {
    constructor(expr, vm, cb) {
        this.expr = expr
        this.vm = vm
        this.cb = cb
        this.oldValue = this.getOldValue()
    }
    getOldValue() {
        window.target = this
        const oldValue = utils.getValue(this.expr, this.vm)
        window.target = null
        return oldValue
    }
    update() {
        const newValue = utils.getValue(this.expr, this.vm)
        if (newValue !== this.oldValue) {
            this.cb(newValue)
        }
    }

}

class Dep {
    constructor() {
        this.collect = []
    }
    add(w) {
        this.collect.push(w)
    }
    notify() {
        this.collect.forEach(w => w.update())
    }
}

class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        if (data && typeof data === 'object')
            Object.keys(data).forEach(k => {
                this.defineReactive(data, k, data[k])
            })
    }
    defineReactive(data, k, value) {
        this.observer(value)
        const dep = new Dep
        Object.defineProperty(data, k, {
            get() {
                const target = window.target
                target && dep.add(target)
                return value
            },
            set: (newValue) => {
                if (value === newValue) return
                this.observer(newValue)
                value = newValue
                dep.notify()
            }
        })
    }
}

class Vue {
    constructor(options) {
        this.$el = options.el
        this.$data = options.data
        this.$options = options

        new Observer(this.$data)
        
        this.proxyData(this.$data)

        // 编辑模板
        new Compiler(options.el, this)
    }
    // 通过this.xx 更改 this.$data.xx的内容
    proxyData(data) {
        Object.keys(data).forEach(k => {
            Object.defineProperty(this, k, {
                get() {
                    return data[k]
                },
                set(newValue) {
                    data[k] = newValue
                }
            })
        })
    }
}

class Compiler {
    constructor(el, vm) {
        this.el = this.isElement(el) ? el : document.querySelector(el)
        this.vm = vm
        const fragment = this.compileFragment(this.el)
        this.compile(fragment)
        this.el.appendChild(fragment)
    }
    compile(fragment) {
        const childNodes = Array.from(fragment.childNodes)
        childNodes.forEach(childNode => {
            // 编译元素节点
            if (this.isElement(childNode)) {
                this.compileElement(childNode)
            }
            // 编译文本节点
            else if (this.isTextElement(childNode)) {
                this.compileTextElement(childNode)
            }
            if (childNode.childNodes && childNode.childNodes.length) {
                this.compile(childNode)
            }

        })
    }

    compileFragment(el) {
        const f = document.createDocumentFragment()
        let firstChild
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild)
            // 如果使用appendChid方法将原dom树中的节点添加到DocumentFragment中时，会删除原来的节点。 
        }
        return f
    }
    compileElement(node) {
        const attributes = Array.from(node.attributes)
        attributes.forEach(attr => {
            const { name, value: expr } = attr
            // 处理指令 v-model、v-on:x、v-text、v-html
            if (this.isDirective(name)) {
                const [, directiveName] = name.split('-')
                const [compileKey, eventName] = directiveName.split(':')
                utils[compileKey](node, expr, this.vm, eventName)
            } else if (this.isEventName(name)) {
                const [, eventName] = name.split('@')
                utils.on(node, expr, this.vm, eventName)
            }
        })

    }
    compileTextElement(node) {
        const content = node.textContent
        if (/\{\{(.+)\}\}/.test(content)) {
            //...

            utils['text'](node, content, this.vm)
        }
    }
    isElement(el) {
        return el.nodeType === 1
    }
    isTextElement(el) {
        return el.nodeType === 3
    }
    isDirective(name) {
        return name.startsWith('v-')
    }
    isEventName(name) {
        return name.startsWith('@')
    }

}
