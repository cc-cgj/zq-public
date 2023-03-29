import React, { PureComponent, createRef } from 'react'
class Foo extends PureComponent {
  constructor() {
    super()
    this.state = {
      title: "Foo"
    }
  }
  render() {
    return (
      <h2>{this.state.title}</h2>
    )
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.fooRef = null
  }
  render() {
    return (
      <div>
        <div ref="appRef">App</div>
        <h2 ref={this.titleRef}>DOM_title</h2>
        <Foo ref={ref => this.fooRef = ref} />
        <hr />
        <button onClick={this.getDOMRef.bind(this)}>获取DOM</button>
      </div>
    )
  }
  getDOMRef() {
    // 1、ref字符串的定义（不推荐，后续可能不支持）
    console.log(this.refs.appRef);
    // 2、createRef的使用
    console.log(this.titleRef);
    // 3、函数的使用
    /**
     * 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。
     * 这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。
     * 通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。
     */
    console.log(this.fooRef);
    this.fooRef.setState({
      title:"App_Foo"
    })
  }
}
