class Dep {
    constructor() {
        this.subscribe = new Set()
    }
    addEffect(effect) {
        this.subscribe.add(effect)
    }
    notify() {
        this.subscribe.forEach(effect => {
            effect()
        })
    }
}

const dep = new Dep()

const info = {
    num: 10
}

function doubleCounter() {
    console.log(info.num + 'hhh')
}
function powerCounter() {
    console.log(info.num)
}
dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)
info.num++
dep.notify()