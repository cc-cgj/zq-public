let activeEffect = null
const targetWeakMap = new WeakMap()

class Dep {
    constructor() {
        this.subscribe = new Set()
    }
    deppend() {
        if (activeEffect) {
            this.subscribe.add(activeEffect)
        }
    }
    notify() {
        this.subscribe.forEach(notify => notify())
    }
}

function getDep(target, key) {
    let targetMap = targetWeakMap.get(target)
    if (!targetMap) {
        targetMap = new Map()
        targetWeakMap.set(target, targetMap)
    }
    let depMap = targetMap.get(key)
    if (!depMap) {
        depMap = new Dep()
        targetMap.set(key, depMap)
    }
    return depMap
}

function reactive(raw) {
    return new Proxy(raw, {
        get(target, key) {
            const dep = getDep(target, key)
            dep.deppend()
            switch (Object.prototype.toString.call(target[key])) {
                case '[object Array]':
                case '[object Object]':
                    target[key] = reactive(target[key])
                    break;
            }
            return target[key]
        },
        set(target, key, newValue) {
            const dep = getDep(target, key)
            target[key] = newValue
            dep.notify()
            // 表示成功
            return true;
        }
    })
}

function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}