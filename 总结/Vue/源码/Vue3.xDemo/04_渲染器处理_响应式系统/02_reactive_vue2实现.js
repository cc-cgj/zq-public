class Dep {
    constructor() {
        this.subscribe = new Set()
    }
    depend() {
        if (activeEffect) {
            this.subscribe.add(activeEffect)
        }
    }
    notify() {
        this.subscribe.forEach(effect => effect())
    }
}

let activeEffect = null

const targetMaps = new WeakMap()

function getDep(target, key) {
    let targetMap = targetMaps.get(target)
    if (!targetMap) {
        targetMap = new Map()
        targetMaps.set(target, targetMap)
    }

    let depMap = targetMap.get(key)
    if (!depMap) {
        depMap = new Dep()
        targetMap.set(key, depMap)
    }

    return depMap

}


function reactive(raw) {
    // const dep = new Dep()
    Object.keys(raw).forEach(key => {
        const dep = getDep(raw, key)
        let value = raw[key]
        Object.defineProperty(raw, key, {
            get() {
                dep.depend()
                return value
            },
            set(newValue) {
                if (newValue !== value) {
                    value = newValue
                    dep.notify()
                }

            }
        })
    })
    return raw
}

function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}


