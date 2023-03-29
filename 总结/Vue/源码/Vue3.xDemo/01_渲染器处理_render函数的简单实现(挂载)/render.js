function h(tag, props, children) {
    return {
        tag,
        props,
        children
    }
}

function mount(vnode, container) {
    const el = vnode.el = document.createElement(vnode.tag)
    // 处理props
    if (vnode.props) {
        for (const attribute in vnode.props) {
            if (attribute.startsWith('on')) {
                el.addEventListener(attribute.slice(2).toLowercase(), vnode.props[attribute])
            } else {
                el.setAttribute(attribute, vnode.props[attribute])
            }
        }
    }
    // 处理children
    if (typeof vnode.children === 'string') {
        el.textContent = vnode.children
    } else {
        vnode.children.forEach(item => {
            if (typeof vnode.children === 'string') {
                el.textContent = vnode.children
            } else {
                mount(item, el)
            }
        })
    }
    // 生成元素
    container.appendChild(el)
}