# 01-受控组件

```JS
/**
 * 表单 : 收集数据
 * 受控组件 :
 * - 受 React 控制的组件
 * - 给input 添加value值, 那么这个input就成为了受控组件
 * - M  ==> V  , V ==> M (我们自己处理)
 * - 1. 需要给input 添加 value 并且赋值 => 这个 input 就成为了一个受控组件
 * - 2. onChange={ this.handleInput.bind(this)  }
 * - 3. handleInput(e){
 *    this.setState({
 *        username : e.target.value
 *     })
 *  }
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  state = {
    username: 'zs'
  }
  render() {
    return (
      <input  value={this.state.username}  onChange={this.handleInput.bind(this)}/>
    )
  }
  handleInput(e) {
    // (V)拿到文本框的值, 修改 state 里面的数据(M)
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 02-属性问题

```JS
/**
 * 属性问题
 * jsx 有两个属性需要注意的
 * 1.  class  ==> className
 * 2.  for    ==> htmlFor
 * 3. 行内样式  style = {{ color :'red' }}  这里并不是双花括号,语法还是{}  , 只不过{}里面放了一个对象
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
import './css/demo1.css'
//2. 类组件
class Child extends React.Component {
  state = {
    username: 'zs'
  }
  render() {
    let obj = { color: 'red', fontSize: '20px' }
    return (
      <div>
        <label htmlFor="ipt">用户名</label>
        <input id="ipt" className="cls" />
        <p className="cls">这是p标签-类</p>
        <p>{this.state.username}</p>
        <p style={obj}>这是p标签-行内样式的</p>
      </div>
    )
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))

```

# 03-其他表单怎么处理受控组件

```JS
/**
 * 其他表单怎么处理受控组件
 * input
 * textarea 文本域
 * select  选择下拉框
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2 类组件
class Child extends React.Component {
  state = {
    username: 'zs',
    content: '评论内容',
    city: 'hangzhou'
  }
  render() {
    return (
      <div>
        {/* input */}
        <div>
          用户名 :{' '}
          <input type="text" value={this.state.username} onChange={this.handleInput.bind(this)} />
        </div>
        {/* 文本域  textarea */}
        <div>
          主内容:{' '}
          <textarea cols="30" rows="10" value={this.state.content} onChange={this.handleTextarea.bind(this)}/>
        </div>
        {/* 选择下拉框 */}
        <div>
          城市:
          <select value={this.state.city} onChange={this.handleSelect.bind(this)}>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="hangzhou">杭州</option>
          </select>
        </div>
      </div>
    )
  }
  // 处理下拉框
  handleSelect(e) {
    this.setState({
      city: e.target.value
    })
  }
  // 处理文本域
  handleTextarea(e) {
    this.setState({
      content: e.target.value
    })
  }
  // 处理 input
  handleInput(e) {
    this.setState({
      username: e.target.value
    })
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))

```



# 04-评论案例添加评论

```JS
/**
 * 评论案例添加评论
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class CommentList extends React.Component {
  state = {
    list: [
      { id: 1, name: '王春', content: '今天晴天' },
      { id: 2, name: '大飞哥', content: '今天下雪' },
      { id: 3, name: '涛涛', content: '你俩484傻' }
    ],
    username: 'zs',
    content: ''
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.username} name="username" onChange={this.handle.bind(this)}/>
          <br />
          <textarea cols="30" rows="10" name="content" value={this.state.content} onChange={this.handle.bind(this)}/>
          <button onClick={this.add.bind(this)}>添加</button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                <p>评论人:{item.name}</p>
                <p>评论内容:{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  add() {
    this.state.list.unshift({
      id: +new Date(),
      name: this.state.username,
      content: this.state.content
    })
    this.setState({
      list: this.state.list,
      username: '',
      content: ''
    })
  }
  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}
//3. 渲染
ReactDOM.render(<CommentList />, document.getElementById('root'))

```

# 06-setState 详解

```JS
/**
 * setState 详解
 * 1. 修改状态,不能直接修改 this.state.name = 'ls'  不行的
 * 2. 使用  setState({  name : 'ls' })
 * 3. setState 是异步的 , 如果上面通过setState修改状态,下面立马要获取最新的数据,是获取不到的
 * 4. setState() 第二个参数,可以写为函数形式, 函数里面获取最新的数据
 * 5. setState() 第一个参数, 也可以改为函数, 函数的形参 state, 就是 this.state,
 *    拿到的永远都是`最新的值`
 * 6. 在函数 里面,再返回这个对象
 *    this.setState( state => {
 *        return {
 *          counter : state.counter+1
 *         }
 *    } )
 *
 * 7. 以后使用
 *  如果你想给某个state值赋值,,但是涉及到之前state里面的值,使用函数形式
 *    this.setState( state => {
 *        return {
 *          counter : state.counter+1
 *         }
 *    } )
 *  如果你想给某个state赋值,没有涉及到state里面的其他值,就还是可以使用对象形式的
 *  this.setState({
 *    name : 'zs'
 *  })
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'

//2. 类组件
class Child extends React.Component {
  state = {
    name: 'zs',
    counter: 1
  }
  render() {
    return (
      <div>
        <div>哈哈-{this.state.counter}</div>
        <button onClick={this.fn.bind(this)}>按钮</button>
      </div>
    )
  }
  fn() {
    // 我想点一次走三步
    // state 是上一次改变的最新的值
    // state 就是 this.state , 而且还是最新的值
    // props 就是外界传过来的props ,props也是最新的
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    })
  }
  fn1() {
    // this.state.name = 'ls'
    this.setState(
      {
        name: 'ls'
      },
      () => {
        // 获取最新的数据
        console.log(this.state.name)
      }
    )
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))

```

# 07-使用  setState 改造 评论案例

```JS
/**
 *  使用  setState 改造 评论案例
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class CommentList extends React.Component {
  state = {
    list: [
      { id: 1, name: '王春', content: '今天晴天' },
      { id: 2, name: '大飞哥', content: '今天下雪' },
      { id: 3, name: '涛涛', content: '你俩484傻' }
    ],
    username: 'zs',
    content: ''
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.username} name="username" onChange={this.handle.bind(this)}/>
          <br />
          <textarea cols="30" rows="10" name="content" value={this.state.content} onChange={this.handle.bind(this)}/>
          <button onClick={this.add.bind(this)}>添加</button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                <p>评论人:{item.name}</p>
                <p>评论内容:{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  add() {
    // this.state.list.unshift({
    //   id: +new Date(),
    //   name: this.state.username,
    //   content: this.state.content
    // })
    // this.setState({
    //   list: this.state.list,
    //   username: '',
    //   content: ''
    // })
    let newData = {
      id: +new Date(),
      name: this.state.username,
      content: this.state.content
    }
    this.setState(state => {
      return {
        list: [newData, ...state.list],
        username: '',
        content: ''
      }
    })
  }
  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.setState(state => {
    //   return {
    //     [e.target.name]: e.target.value
    //   }
    // })
  }
}
//3. 渲染
ReactDOM.render(<CommentList />, document.getElementById('root'))
```

# 08-非受控组件

```JS
/**
 * 08-非受控组件
 *
 * 受控组件 : 受 react 的控制
 *       - 添加value 就是 一个受控组件了
 *       - value={}
 *       - onChange={}
 * 非受控组件 : 没有受到react的控制 , 没有添加value过的
 *      - 如果我们想要拿到非受控组件里的值, 通过 DOM 操作 , 通过 ref
 * 方式1 : 通过引用
 *  - 第一步 : 在 constructor 里面 , 创建一个引用
 *  - 第二步 : 通过 ref={}  把 引用和要绑定的表单绑定在一起
 *  - 第三步 : 通过 this.usernameRef.current.value
 * 方式2 : 箭头函数
 *  - 第一步 : ref={ el => this.btn = el }
 *  - 第二步 : this.btn
 *
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  constructor(props) {
    super(props)
    //第一步 : 创建一个引用
    this.usernameRef = React.createRef()
  }
  render() {
    return (
      <div>
        {/* 第二步 : 把 ref 和 表单元素绑定在一起 */}
        <input ref={this.usernameRef} type="text" /> <br />
        <button ref={el => (this.btn = el)} onClick={this.fn.bind(this)}>
          按钮
        </button>
      </div>
    )
  }
  fn() {
    // 第三步 : 通过引用,找到current 拿到对应的绑定元素,再获取value值
    // console.log(this.usernameRef.current.value)

    console.log(this.btn)
  }
}
//3.
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 09-defaultValue

```JS
/**
 *
 * 想给input 添加默认值,但是 如果直接给value值的话,那就是受控组件了
 * 又想添加默认 值,又不想成为受控组件
 * defaultValue="zs"    又想添加默认 值,又不想成为受控组件
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  render() {
    return (
      <div>
        <input type="text" defaultValue="zs" />
      </div>
    )
  }
}
//3.
ReactDOM.render(<Child />, document.getElementById('root'))

```

# 10-组件的通讯

```JS
/**
 * 组件的通讯
 * 父 => 子
 *   1. 通过自定义属性, 将属性传递
 *   2. 子组件里通过  this.props  (单向数据流 ,只读)
 *
 * 子 => 父  (思想 : 通过属性把方法传递过来)
 *   1. 父组件里准备一个方法  pfn(){}
 *   2. 通过属性,将父组件里的方法传递给子组件  fn={ this.pfn }
 *   3. 子组件调用这个 fn 等同于调用 pfn    this.props.fn()
 *   4. 将要传递的参数,传递即可
 *
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
// 父组件
class Father extends React.Component {
  state = {
    pmsg: '父组件里的数据'
  }
  render() {
    return (
      <div>
        父组件:
        <Son msg={this.state.pmsg} fn={this.pfn} />
      </div>
    )
  }
  // 父组件里的方法
  pfn(res) {
    console.log('pfn:', res)
  }
}
// 子组件
class Son extends React.Component {
  state = {
    cmsg: '子组件里的数据'
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>子组件: {this.props.msg}</div>
        <button onClick={this.f.bind(this)}>子组件的按钮</button>
      </div>
    )
  }
  f() {
    // console.log(this.props.fn)
    this.props.fn(this.state.cmsg)
  }
}
//3. 渲染
ReactDOM.render(<Father />, document.getElementById('root'))
```



```JS
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
// 引入表单组件
import CommentForm from './components/CommentForm.jsx'
// 引入列表组件
import CommentList from './components/CommentList.jsx'
//2. 组件
class Comment extends React.Component {
  // state = {
  //   username: '',
  //   content: ''
  // }
  render() {
    return (
      <div>
        {/* 表单 */}
        <CommentForm />
        {/* 列表 */}
        <CommentList />
      </div>
    )
  }
  handle(e) {
    // const { name, value } = e.target
    // this.setState({
    //   [name]: value
    // })
  }
  add() {
    // //1. 获取值
    // const { username, content } = this.state
    // //2.新对象
    // let newData = {
    //   id: +new Date(),
    //   name: username,
    //   content: content
    // }
    // //3. 添加到数组里
    // this.setState(state => {
    //   return {
    //     list: [newData, ...state.list],
    //     username: '',
    //     content: ''
    //   }
    // })
  }
}
//3. 渲染
ReactDOM.render(<Comment />, document.getElementById('root'))

```

CommentForm.jsx

```js
//1. 引入 React
import React from 'react'
//2. 表单组件
class CommentForm extends React.Component {
  state = {
    username: '',
    content: ''
  }
  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handle.bind(this)}
        />{' '}
        <br />
        <textarea
          name="content"
          cols="23"
          rows="6"
          value={this.state.content}
          onChange={this.handle.bind(this)}
        />
        <button onClick={this.add.bind(this)}>添加</button>
      </div>
    )
  }
  // handle
  handle(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }
  // 添加
  add() {
    // 子传父 => 把 username 和 content 都传给 父
    const { username, content } = this.state
    this.props.add(username, content)

    this.setState({
      username: '',
      content: ''
    })
  }
}
//3. 导出组件
export default CommentForm
```

CommentList.jsx

```js
//1. 引入 react
import React from 'react'
import './CommentList.css'

//2. 类组件
class CommentList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map(item => (
            <li key={item.id}>
              <p>评论人 : {item.username}</p>
              <p>评论内容 : {item.content}</p>
              <button onClick={this.del.bind(this, item.id)}>X</button>
            </li>
          ))}
          {/* {this.props.list.map(item => {
            return (
              <li key={item.id}>
                <p>评论人 : {item.username}</p>
                <p>评论内容 : {item.content}</p>
              </li>
            )
          })} */}
        </ul>
      </div>
    )
  }
  del(id) {
    this.props.del(id)
  }
}
//3. 导出去
export default CommentList
```

CommentList.css

```css
ul {
  list-style: none;
  margin: 20px 0;
  padding: 0;
}
ul li {
  border: 1px solid #ccc;
  width: 300px;
  padding: 0 20px;
  margin-top: 10px;
  position: relative;
}
ul li button {
  position: absolute;
  top: 0;
  right: 0;
}
```



