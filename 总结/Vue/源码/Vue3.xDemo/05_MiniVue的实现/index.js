function createApp(component) {
    return {
        mount(selector) {
            const rootEL = document.querySelector(selector)
            let oldVnode = null
            let isOnceMounted = null
            watchEffect(function () {
                if (!isOnceMounted) {
                    oldVnode = component.render()
                    mount(oldVnode, rootEL)
                    isOnceMounted = true
                } else {
                    const newVnode = component.render()
                    patch(oldVnode, newVnode)
                    oldVnode = newVnode
                }
            })
        }
    }
}