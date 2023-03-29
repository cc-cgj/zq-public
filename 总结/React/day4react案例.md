# 02-以前一级一级的传递color演示

```JS
/**
 * 状态提升,确实能解决兄弟之间传递数据的问题, 但是如果嵌套的太深, 最近的父组价里的太远
 * 方式1 : Context  (全局)
 * 方式2 : 状态管理工具  redux (类似于 vue 里面的vuex)  后面后讲
 * 需求 : father 的属性color 传递给 sun
 */
//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './css/02.css'
//2. 类组件
class Father extends React.Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      <div className="fa">
        父 : <Son color={this.state.color} />
      </div>
    )
  }
}
class Son extends React.Component {
  state = {}
  render() {
    return (
      <div className="son">
        子 : <Sun color={this.props.color} />
      </div>
    )
  }
}
class Sun extends React.Component {
  state = {}
  render() {
    return (
      <div style={{ color: this.props.color }} className="sun">
        孙 :
      </div>
    )
  }
}
//3. 渲染
ReactDOM.render(<Father />, document.getElementById('root'))

```

# 03-context

```JS
/**
 * 状态提升,确实能解决兄弟之间传递数据的问题, 但是如果嵌套的太深, 最近的父组价里的太远
 * 方式1 : Context  (全局)
 * 方式2 : 状态管理工具  redux (类似于 vue 里面的vuex)  后面后讲
 * 需求 : father 的属性color 传递给 sun
 * 使用 Context 解决这个传递问题
 * 第一步 : 创建上下文Context ,并且引入两个组件
 *    1.  const  Context =   React.createContext()
 *       Context.Provider  ,  Context.Consumer
 *    2. const  { Provider, Consumer } =   React.createContext()
 *       Provider  ,  Consumer
 *
 * 第二步 : 提供者 提供数据
 *     <Provider value={ this.state.color } >   </Provider>
 *
 * 第三步 : 消费者 使用数据
 *    <Consumer>
 *      {  value => {
 *          return jsx
 *      }  }
 *    </Consumer>
 */
//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './css/02.css'

// 第一步 : 通过react 创建 context
// context 里面有两个组件 Provider 和 Consumer
// Provider : 提供者 提供数据的
// Consumer : 消费者 使用数据的
const { Provider, Consumer } = React.createContext()
//2. 类组件
class Father extends React.Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      <Provider value={this.state.color}>
        <div className="fa">
          父 : <Son />
        </div>
      </Provider>
    )
  }
}
class Son extends React.Component {
  state = {}
  render() {
    return (
      <div className="son">
        子 : <Sun />
      </div>
    )
  }
}
class Sun extends React.Component {
  state = {}
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div style={{ color: value }} className="sun">
              孙 :
            </div>
          )
        }}
      </Consumer>
    )
  }
}
//3. 渲染
ReactDOM.render(<Father />, document.getElementById('root'))
```

# 04-属性的类型问题

```JS
/**
 * 属性的类型问题
 * 第一步 : 引入模块  import PropTypes from 'prop-types'
 * 第二步 : 校验  Son组件要接收并且校验
 *    Son.propTypes = {
 *      msg : PropTypes.string/number/bool,
 *      fn : PropTypes.func
 *    }
 */
//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
// 第一步 : 引入 校验 模块
import PropTypes from 'prop-types'
//2. 类组件
class Father extends React.Component {
  state = {}
  render() {
    return (
      <div>
        父组件: <Son name="ls" msg="10" fn={this.fn} />
      </div>
    )
  }
  fn() {
    console.log('父的方法')
  }
}
// son 接收属性 校验应该在son里校验
class Son extends React.Component {
  state = {}
  render() {
    return (
      <div>
        子组件 :{this.props.msg}
        {this.props.name}
        <br />
        <button onClick={this.f.bind(this)}>按钮</button>
      </div>
    )
  }
  f() {
    this.props.fn()
  }
}
// 默认属性
Son.defaultProps = {
  name: '这是默认的名称'
}
// 类型检查
Son.propTypes = {
  msg: PropTypes.string,
  fn: PropTypes.func,
  // 必须传的
  name: PropTypes.string.isRequired
}
//3. 渲染
ReactDOM.render(<Father />, document.getElementById('root'))

```

# 05-static的介绍

```JS
/**
 * static 静态属性和静态方法
 *  在方法的前面 添加 static , 方法就会成为静态方法, 只有类Person才可以调用
 */
class Person {
  // static say() {
  //   console.log('我是Person的静态方法')
  // }
}
// 给 Person类 添加的方法
// Person.say = function() {
//   console.log('我是Person的静态方法')
// }
Person.say()
// let p = new Person()
// p.say()
```

# 06-static

```JS
/**
 *  使用static 改造
 */
//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'

// 第一步 : 引入 校验 模块
import PropTypes from 'prop-types'

//2. 类组件
class Father extends React.Component {
  state = {}
  render() {
    return (
      <div>
        父组件: <Son msg="10" fn={this.fn} />
      </div>
    )
  }
  pfn() {
    console.log('父的方法')
  }
}
// son 接收属性 校验应该在son里校验
class Son extends React.Component {
  // 默认属性
  static defaultProps = {
    name: '这是默认的名称'
  }
  // 类型检查
  static propTypes = {
    msg: PropTypes.string,
    fn: PropTypes.func,
    // 必须传的
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        子组件 :{this.props.msg}
        {this.props.name}
        <br />
        <button onClick={this.f.bind(this)}>按钮</button>
      </div>
    )
  }
  f() {
    this.props.fn()
  }
}
// // 默认属性
// Son.defaultProps = {
//   name: '这是默认的名称'
// }
// // 类型检查
// Son.propTypes = {
//   msg: PropTypes.string,
//   fn: PropTypes.func,
//   // 必须传的
//   name: PropTypes.string.isRequired
// }
//3. 渲染
ReactDOM.render(<Father />, document.getElementById('root'))

```

# 生命周期

```js
/**
 * 生命周期
 */
//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './css/02.css'
//父组件
class Father extends React.Component {
  state = {
    car: '雅迪',
    isShow: true
  }
  render() {
    return (
      <div>
        父组件 :<button onClick={this.fn.bind(this)}>改变car</button>
        {this.state.isShow ? <Child car={this.state.car} /> : ''}
      </div>
    )
  }
  fn() {
    this.setState({
      car: '一汽大众的车',
      isShow: false
    })
  }
}
//子组件
class Child extends React.Component {
  constructor(props) {
    super(props)
    console.warn('constructor:', '构造器')
    this.state = {
      count: 1,
      timer: ''
    }
  }
  // 挂载之前
  componentWillMount() {
    console.warn('componentWillMount:', '挂载之前', document.querySelector('p'))
  }
  render() {
    console.warn('render')

    return (
      <div className="son">
        <p>哈哈 - {this.state.count}</p>
        <p>这是父传过来的 : {this.props.car}</p>
        <button onClick={this.updateName.bind(this)}>按钮</button>
      </div>
    )
  }
  // 挂载之后
  // 1.发送ajax
  // 2.操作DOM
  componentDidMount() {
    let timer = setInterval(() => {
      console.log('春:好嗨哟')
    }, 500)

    this.setState({
      timer
    })

    console.warn('componentDidMount:', '挂载之后', document.querySelector('p'))
  }
  // 子组件将要接收属性
  componentWillReceiveProps() {
    console.warn('componentWillReceiveProps:', '子组件将要接收属性')
  }
  // 是否让组件更新渲染
  // 参数1 : nextProps 最新的属性
  // 参数2 : nextState 最新的状态
  shouldComponentUpdate(nextProps, nextState) {
    // 如果 count <= 3 可以更新渲染 >3 不让你渲染了
    // console.log(this.state.count)
    // console.log(nextState.count)
    // return nextState.count <= 3 ? true : false
    // return nextState.count % 2 === 1 ? true : false
    console.warn('shouldComponentUpdate', '是否让组件更新渲染')
    return true
  }
  // 将要更新
  componentWillUpdate() {
    console.warn('componentWillUpdate:', '更新之前')
  }
  // 更新之后
  componentDidUpdate() {
    console.warn('componentDidUpdate:', '更新之后')
  }
  // 组件将要被销毁
  componentWillUnmount() {
    console.warn('componentWillUnmount', '组件将要被销毁')
    // 清除定时器
    clearInterval(this.state.timer)
  }
  // ----------------------------------------
  updateName() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
}
//3. 渲染
ReactDOM.render(<Father />, document.getElementById('root'))

```





