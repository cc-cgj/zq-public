function h(tag, props, children) {
    return {
        tag, props, children
    }
}

function mount(vnode, targetEl) {
    const el = vnode.el = document.createElement(vnode.tag)
    const props = vnode.props || {}
    for (const key in props) {
        if (key.startsWith('on')) {
            el.addEventListener(key.slice(2).toLowerCase(), props[key])
        } else {
            el.setAttribute(key, props[key])
        }
    }
    const children = vnode.children || []
    if (typeof children === 'string') {
        el.textContent = children
    } else if (Array.isArray(children)) {
        children.forEach(item => {
            mount(item, el)
        })
    }
    targetEl.appendChild(el)
}

function patch(n1, n2) {
    if (n1.tag !== n2.tag) {
        const parentEL = n1.el.parentNode
        parentEL.removeChild(n1.el)
        mount(n2, parentEL)
    } else {
        const el = n2.el = n1.el

        /** @desciption 处理props */

        const oldProps = n1.props || {}
        const newProps = n2.props || {}

        // 添加属性
        for (const newKey in newProps) {
            const oldValue = oldProps[newKey]
            const newValue = newProps[newKey]
            if (newKey.startsWith('on')) {
                el.addEventListener(newKey.slice(2).toLowerCase(), newValue)
            } else if (newValue !== oldValue) {
                el.setAttribute(newKey, newValue)
            }
        }
        // 删除属性
        for (const oldKey in oldProps) {
            if (oldKey.startsWith('on')) {
                el.removeEventListener(oldKey.slice(2).toLowerCase(), oldProps[oldKey])
            } else if (!(oldKey in newProps)) {
                el.removeAttribute(oldKey)
            }
        }

        /** @desciption 处理children */

        const oldChlidren = n1.children || []
        const newChlidren = n2.children || []
        if (typeof newChlidren === 'string') {
            oldChlidren !== newChlidren && (el.textContent = newChlidren)
        } else {
            if (typeof oldChlidren === 'string') {
                mount(n2, el)
            } else {
                // 公共节点处理
                const commLength = Math.min(oldChlidren.length, newChlidren.length)
                for (let i = 0; i < commLength; i++) {
                    patch(oldChlidren[i], newChlidren[i])
                }
                // 剩余节点处理
                if (newChlidren.length > oldChlidren.length) {
                    newChlidren.slice(oldChlidren.length).forEach(item => mount(item, el))
                } else if ((oldChlidren.length > newChlidren.length)) {
                    oldChlidren.slice(newChlidren.length).forEach(vnode => el.removeChild(vnode.el))
                }
            }
        }
    }
}   