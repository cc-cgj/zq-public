function h(tag, props, children) {
    return {
        tag,
        props,
        children
    }
}

function mount(vnode, targetEl) {
    const el = vnode.el = document.createElement(vnode.tag)
    // 处理props
    if (vnode.props) {
        for (const key in vnode.props) {
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key])
            } else {
                el.setAttribute(key, vnode.props[key])
            }
        }
    }
    // 处理chlidren
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.textContent = vnode.children
        } else if (Array.isArray(vnode.children)) {
            vnode.children.forEach(function (vonode) {
                mount(vonode, el)
            })
        }
    }

    // 进行挂载
    targetEl.appendChild(el)
}


function patch(n1, n2) {
    const parentEl = n1.el.parentElement
    // 1.0 新的标签则直接替换
    if (n1.tag !== n2.tag) {
        parentEl.removeChild(n1.el)
        mount(n2, parentEl)
    } else {
        const el = n2.el = n1.el
        // 对比props   
        const oldProps = n1.props || {}
        const newProps = n2.props || {}
        
        // 2.1 为新的元素添加新的事件处理函数/属性
        for (const key in newProps) {
            const oldValue = oldProps[key]
            const newValue = newProps[key]
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), newProps[key])
            } else if (oldValue !== newValue) {
                el.setAttribute(key, newValue)
            }
        }
        // 2.2 删除旧的事件处理函数/元素
        for (const key in oldProps) {
            if (!(key in newProps)) {
                if (key.startsWith('on')) {
                    el.removeEventListener(key, oldProps[key])
                } else {
                    el.removeAttribute(key)
                }
            }
        }
        parentEl.appendChild(el)
    }
}
