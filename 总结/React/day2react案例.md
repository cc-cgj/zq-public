# 01-函数组件和类组件的基本使用

```js
/**
 * 组件
 * 函数组件 : 函数创建组件
 * 类组件 : 类创建组件
 */
/**
 * 函数组件
 * 1. 函数名首字母一定要大写  2. 把组件当成标签使用  3. 函数内部 通过 return jsx
 */
//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
//2. 函数组件
function Hello() {
  return (
    <div>
      <p>这是函数组件</p>
    </div>
  )
}
/**
 * 类组件
 * 1. 首字母也要大写
 * 2. 类一定要继承(extends)  React.Component
 * 3. 类里面一定要有一个 render 函数
 * 4. render 函数里面通过 return jsx
 * 5. 类组件也是当成标签一样使用的
 */
//2. 类组件
class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>这是类组件</p>
      </div>
    )
  }
}
//3. 渲染
ReactDOM.render(<Hello />, document.getElementById('root'))
```

# 02-类组件的状态

```js
/**
 * 函数组件和类组件的区别 ?
 * 函数组件 : 没有状态的 , 没有自己的数据
 * 类组件 :   有状态  , 有自己的数据
 *  状态 : 有两种写法
 * 写法1 : constructor 里面
 *     this.state = {
 *       name : 'zs;
 *       age : 30
 *      }
 *  写法2 : 属性初始化语法
 *   state = {
 *     name : '王春春',
 *     age : 100
 *   }
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  constructor() {
    super()
    // child 组件的状态 数据
    // this.state = {
    //   name: '张山',
    //   age: 30
    // }
  }
  // 属性初始化语法
  state = {
    name: '小李',
    age: 100
  }
  render() {
    return (
      <div>
        哈哈-{this.state.name} - {this.state.age}
      </div>
    )
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 03-类组件修改状态

```js
/**
 * 修改状态
 * 1. 如果使用 this.state.name = '春春' , 这样只会修改state里面的数据,但是无法更新视图
 * 2. 不推荐使用上面直接修改数据的
 *    使用 setState()
 *    this.setState({
 *      name : '春春'
 *    })
 *    1.修改数据 2-更新视图
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  state = {
    name: '张山'
  }
  render() {
    return <div>哈哈 - {this.state.name}</div>
  }
  // 组件将要挂载
  componentWillMount() {
    console.warn('componentWillMount')
  }
  // 组件已经挂载了
  componentDidMount() {
    console.warn('componentDidMount')
    // 自动修改数据
    // this.state.name = '李李'
    this.setState({
      name: '小李'
    })
  }
  // 组件被更新了
  componentDidUpdate() {
    console.warn('componentDidUpdate')
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 04-组件传参

```js
/**
 * 组件传参
 * 函数组件 :
 *  1. 传参: 通过属性 传递 name='小张' age={30}
 *  2. 接收 : function Child(props) {}
 * 类组件 :
 *  1. 传参 : 通过属性 传递 name='春' age={30}
 *  2. 接收1 : this.props
 *     接收2 : constructor里面接收
 *          constructor(props){
 *            super(props)
 *            console.log(props)
 *          }
 * 注意 : 以后写类组件的时候 因为有extends
 *      constructor(props){
 *        super(props)
 *       }
 * 注意点2 : 不管是函数组件还是类组件,凡是传过来的props 都是只读的,单向数据流
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 函数组件
function Child(props) {
  console.log(props)
  return (
    <div>
      函数组件 - {props.name} - {props.age}
    </div>
  )
}
// 2. 类组件
// class Child extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
//   }
//   render() {
//     // console.log(this.props)
//     return (
//       <div>
//         类组件 - {this.props.name} - {this.props.age}
//       </div>
//     )
//   }
// }
//3. 渲染
ReactDOM.render(<Child name="小李" age={30} />, document.getElementById('root'))
```



# 05-使用 state  修改定时器

```js
//1. 引入包
import React from 'react'
import ReactDOM from 'react-dom'
//2 . 类组件
class Child extends React.Component {
  // 相当于 vue 里的 data
  state = {
    time: new Date()
  }
  render() {
    return (
      <div>
        <h3>时间更新</h3>
        <p>{this.state.time.toLocaleString()}</p>
      </div>
    )
  }
  // 定时器, 定时器不断的获取最新时间,  修改 time ,  => 更新视图
  componentDidMount() {
    // 开启一个定时器
    setInterval(() => {
      console.log('111')
      // this.state.time = new Date()
      this.setState({
        time: new Date()
      })
    }, 1000)
  }
}
//2. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 05-函数组件，类组件

```js
// vscode在js文件中，对jsx语法非常友好
const element = (
  <div>
    {/* 我是注释 */}
    <h1>这是一个标题</h1>
    <p>这是内容</p>
  </div>
)
// react的组件： 函数组件    类组件
function Hello() {
  return <div>hello react</div>
}
class World extends React.Component {
  // 类组件一定需要有一个方法，render
  constructor(props) {
    super(props)
    // 类组件中，可以通过state属性，提供一些状态
    this.state = {
      msg: '哈哈'
    }
  }
  render() {
    return (
      <div>
        这是world组件---
        {this.state.msg} --- {this.props.name}
      </div>
    )
  }
}
// 函数组件和类组件的区别
// 函数组件：无状态组件
// 类组件： 状态组件， 在类组件中，可以有自己的状态
// 将来，如果某个组件不需要有自己状态，这个组件的内容是固定死的，直接使用函数组件就行
// 如果组件有自己的状态，需要定义一个类组件即可。
ReactDOM.render(<World name="zs" age="18" />, document.getElementById('app'))
```

抽离成单独的JS文件

- 创建Hello.js

- 在Hello.js 中导入React，创建组件，在Hello.js中导出

  ```js
  import React from 'react'
  export default class extends React.Component {
      render(){
          return (
              <div>单独抽离出来的 Hello</div>
          )
      }
  }
  ```

  在index.js中导入Hello组件，渲染到页面

  ```js
  import Hello from './js/Hello'
  ReactDOM.render(<Hello />,document.getElementById('root'))
  ```

# 06-函数组件和类组件的最后总结区别

```js
/**
 * 总结 :
 * 1. 组件 -- 函数组件 + 类组件
 * 2. 函数组件 : 没有状态 (没有自己的私有数据)    木偶组件  组件一旦写好,就不会改变
 *             - 传参:  function Child( props) { }  只读
 * 3. 类组件   : 有状态 (有自己的私有数据 state)  智能组件  状态发生改变,就会更新视图
 *             - 传参  : 1- this.props   2-constructor(props)   {  super(props)   }
 *
 * 4. 优点 :
 *     类组件 : 有状态, 有生命周期钩子函数 ,功能比较强大
 *     函数组件 : 渲染更快
 * 5. 以后区分使用 ?
 *    就要要不要状态,  要状态(类组件)  不要状态(函数组件)
 * 6. props 和 state 能区分开吗???
 *   - state - 自己的私有属性 类似vue的data
 *   - props - 外界传进来的
 */
```

## 函数的定义和调用方式

```js
<script>
        //  函数的定义方式
        // 1. 自定义函数(命名函数) 
        function fn() {};
        // 2. 函数表达式 (匿名函数)
        var fun = function() {};
        // 3. 利用 new Function('参数1','参数2', '函数体');
        var f = new Function('a', 'b', 'console.log(a + b)');
        f(1, 2);
        // 4. 所有函数都是 Function 的实例(对象)
        console.dir(f);
        // 5. 函数也属于对象
        console.log(f instanceof Object);
    </script>
```

## 函数的调用方式

```js
<script>
        // 函数的调用方式
        // 1. 普通函数
        function fn() {
            console.log('人生的巅峰');
        }
        // fn();   fn.call()
        // 2. 对象的方法
        var o = {
            sayHi: function() {
                console.log('人生的巅峰');
            }
        }
        o.sayHi();
        // 3. 构造函数
        function Star() {};
        new Star();
        // 4. 绑定事件函数
        // btn.onclick = function() {};   // 点击了按钮就可以调用这个函数
        // 5. 定时器函数
        // setInterval(function() {}, 1000);  这个函数是定时器自动1秒钟调用一次
        // 6. 立即执行函数
        (function() {
            console.log('人生的巅峰');
        })();
        // 立即执行函数是自动调用
    </script>
```

## this的指向

```js
<body>
    <button>点击</button>
    <script>
        // 函数的不同调用方式决定了this 的指向不同
        // 1. 普通函数 this 指向window
        function fn() {
            console.log('普通函数的this' + this);
        }
        window.fn();
        // 2. 对象的方法 this指向的是对象 o
        var o = {
            sayHi: function() {
                console.log('对象方法的this:' + this);
            }
        }
        o.sayHi();
        // 3. 构造函数 this 指向 ldh 这个实例对象 原型对象里面的this 指向的也是 ldh这个实例对象
        function Star() {};
        Star.prototype.sing = function() {

        }
        var ldh = new Star();
        // 4. 绑定事件函数 this 指向的是函数的调用者 btn这个按钮对象
        var btn = document.querySelector('button');
        btn.onclick = function() {
            console.log('绑定时间函数的this:' + this);
        };
        // 5. 定时器函数 this 指向的也是window
        window.setTimeout(function() {
            console.log('定时器的this:' + this);

        }, 1000);
        // 6. 立即执行函数 this还是指向window
        (function() {
            console.log('立即执行函数的this' + this);
        })();
    </script>
```

```js

        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()

        // 2. apply()  应用 运用的意思
        var o = {
            name: 'andy'
        };

        function fn(arr) {
            console.log(this);
            console.log(arr); // 'pink'

        };
        fn.apply(o, ['pink']);
        // 1. 也是调用函数 第二个可以改变函数内部的this指向
        // 2. 但是他的参数必须是数组(伪数组)
        // 3. apply 的主要应用 比如说我们可以利用 apply 借助于数学内置对象求数组最大值 
        // Math.max();
        var arr = [1, 66, 3, 99, 4];
        var arr1 = ['red', 'pink'];
        // var max = Math.max.apply(null, arr);
        var max = Math.max.apply(Math, arr);
        var min = Math.min.apply(Math, arr);
        console.log(max, min);
    </script>
```

## 改变函数内this指向apply方法

```js
<script>
        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind() 函数的方法

  注意：自定义函数(命名函数) 不能在定义时直接使用该方法调用
  如 function aa(){}.apply() //会报错
  
  不能修改箭头函数的this指向，因为箭头函数的this指向只能从父函数内继承，若没有父函数则为window
  
        // 2. apply()  应用 运用的意思
        var o = {
            name: 'andy'
        };

        function fn(arr) {
            console.log(this);
            console.log(arr); // 'pink'

        };
        fn.apply(o, ['pink']);
        // 1. 调用函数
		// 2. 没有参数时直接调用函数。
		// 3. 还可以改变函数内部的this指向，通过第一个参数来指定
        // 4. 它的第二个参数必须是数组(伪数组)，用来传递给函数的实参----注意：函数内接收的是数组中的值，接收的不是一个数组
        // 5. apply 的主要应用 比如说我们可以利用 apply 借助于数学内置对象求数组最大值 
        // Math.max()中实参为数值;
        var arr = [1, 66, 3, 99, 4];
        var arr1 = ['red', 'pink'];
        // var max = Math.max.apply(null, arr);
        var max = Math.max.apply(Math, arr);
        var min = Math.min.apply(Math, arr);
        console.log(max, min);
    </script>
```

## 改变函数内this指向bind方法

```js
<body>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <script>
        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()
        // 3. bind()  绑定 捆绑的意思
        var o = {
            name: 'andy'
        };
        function fn(a, b) {
            console.log(this);
            console.log(a + b);
        };
        var f = fn.bind(o, 1, 2);
        f();
        // 1. 不会调用原来的函数   可以改变原来函数内部的this 指向
        // 2. 返回的是原函数改变this之后产生新的函数
        // 3. 如果有的函数我们不需要立即调用,但是又想改变这个函数内部的this指向此时用bind
		// 4. 第一个参数为this的指向的目标，第二个参数为传递给函数的实参

        // 5. 我们有一个按钮,当我们点击了之后,就禁用这个按钮,3秒钟之后开启这个按钮
        // var btn1 = document.querySelector('button');
        // btn1.onclick = function() {
        //     this.disabled = true; // 这个this 指向的是 btn 这个按钮
        //     // var that = this;
        //     setTimeout(function() {
        //         // that.disabled = false; // 定时器函数里面的this 指向的是window
        //         this.disabled = false; // 此时定时器函数里面的this 指向的是btn
        //     }.bind(this), 3000); // 这个this 指向的是btn 这个对象
        // }
        var btns = document.querySelectorAll('button');
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                this.disabled = true;
                setTimeout(function() {
                    this.disabled = false;
                }.bind(this), 2000);
            }
        }
    </script>
```

# 07-事件的注册

```js
/**
 *  以前DOM
 * <button onclick='fn'>按钮</button>
 * 注册事件
 * 注意点1 : 注册事件属性采用的是驼峰的    onClick=....
 * 注意点2 : 注册事件的事件处理函数 , 写为函数形式,不能为字符串
 *        onClick={this.fn}
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  render() {
    return <button onClick={this.fn}>按钮</button>
  }
  fn() {
    console.log('我被点击了')
  }
}
//3. 渲染
ReactDOM.render(<Child age={30} />, document.getElementById('root'))
```

# 08-事件中的this处理

```js
/**
 *  处理 this
 * 方法1 : bind   onClick={ this.fn1.bind(this) }
 * 方法2 : 属性初始化语法 onClick={this.fn2}   fn2=()=>{ }
 * 方法3 : 箭头函数   onClick= { () => this.fn3()  }
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  // constructor(props) {
  //   super(props)

  //   // this.fn1 = this.fn1.bind(this)
  // }
  state = {
    name: 'zs'
  }
  render() {
    // console.log(this)
    return (
      <div>
        {/* <button onClick={this.fn}>按钮</button> */}
        {/* onClick={函数} */}
        {/*  
            this
           let newF =  this.fn1.bind(this)
        */}
        {/* <button onClick={this.fn1.bind(this)}>按钮1-bind</button> */}
        {/* <button onClick={this.fn2}>按钮2-属性初始化语法</button> */}
        <button onClick={() => this.fn3()}>按钮3-箭头函数</button>
      </div>
    )
  }
  fn3() {
    console.log(this)
  }
  fn2 = () => {
    console.log(this)
  }
  fn1() {
    console.log(this)
  }
  fn() {
    // react 事件绑定的函数里面的this 没有处理,需要我们自己处理
    console.log(this)
    // console.log('我被点击了:', this.state.name)
  }
}
//3. 渲染
ReactDOM.render(<Child age={30} />, document.getElementById('root'))
// function f() {
//   console.log(this)
// }
// let obj = { name: 'zs' }
// bind 的使用
// f.bind(obj) :  f里面的this 指向了obj
// 绑定之后没有打印,不是bind出了问题,而是bind和call,和apply()
// call和apply 1-调用 2-指向
// bind   1-指向 2-返回一个新函数
// let newF = f.bind(obj)
// newF()
```

# 09-react事件

```js
// 1. 在react中注册事件与给DOM注册事件基本是一样的， onclick onmouseenter onblur onkeyup
// 2. 在react中注册事件，采用驼峰命名法， onClick onMouseEnter onBlur
// 3. 在react中注册事件，通过{}传入的是一个函数, 而不是一个字符串
// 4. 在react中，如果想要组件浏览器的默认行为，不要使用return false，使用e.preventDefault()
class Event extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.clickFn}>点我注册事件</button>
        <a href="http://www.baidu.com" onClick={this.clickFn}>
          前端
        </a>
      </div>
    )
  }
  clickFn(e) {
    // 想要组件浏览器的默认行为
    e.preventDefault()
    console.log('哈哈')
  }
}
ReactDOM.render(<Event />, document.getElementById('app'))
```

# 10-react事件-this的问题

```js
// 在react的事件处理程序中，内部的this是指向undefined
// 解决方案1：  通过this.clickFn.bind(this)
// 解决方案2：  属性初始化器语法, 提供了一个箭头函数
// 解决方案3：  在函数外面包一层箭头函数  onClick={this.clickFn}
//  onClick={()=>{this.clickFn()}}
class Event extends React.Component {
  constructor(props) {
    super(props)
    // 提供组件自己的状态
    this.state = {
      msg: 'hello react'
    }
    // 可以在构造函数中，去处理事件处理函数的this问题
    // this.clickFn = this.clickFn.bind(this)
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        {/* 需求：点击button的时候，需要改变msg的数据 */}
        <button
          onClick={() => {
            this.clickFn()
          }}
        >
          点我修改msg
        </button>
        <a href="" onClick={this.clickFn} />
      </div>
    )
  }
  clickFn() {
    // 修改msg的数据
    // 注意点： 在react注册事件的时候，提供的事件处理函数的内部this指向undefined
    // 没办法访问到this，没有办法访问到当前实例，没有办法访问到数据
    // 如果想要修改react的状态，不能直接通过this.state.xxx去修改
    this.setState({
      msg: '呵呵'
    })
  }
}
ReactDOM.render(<Event />, document.getElementById('app'))
// bind方法： 任何一个函数，都有bind方法，bind方法可以用来修改函数内部的this指向
// call apply
// function fn(){}   fn.bind(obj)
```

# 11-事件中的this处理总结

```js
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  state = {
    name: 'zs'
  }
  render() {
    // return <button onClick={this.fn}>按钮</button>  无法得到 this
    // 方法1 : bind (常用)
    // return <button onClick={this.fn.bind(this)}>按钮</button>
    // 方法2 : 属性初始化语法
    // return <button onClick={this.fn1}>按钮</button>
    // 方法3 : 箭头函数
    return <button onClick={() => this.fn()}>按钮</button>
  }
  fn() {
    console.log(this)
  }
  // 方法2 : 属性初始化语法
  fn1 = () => {
    console.log(this)
  }
}
//3.渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 12-react事件-传参的问题

```js
// 在注册事件的时候，能够传递参数
class Event extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            {/* 能够把id传递过来 */}
            <button onClick={() => {this.clickFn(1)}}>删除1</button>
          </li>
          <li>
            <button onClick={() => { this.clickFn(2)}}>删除2</button>
          </li>
          <li>
            <button>删除3</button>
          </li>
        </ul>
      </div>
    )
  }
  // 传参第一种： 通过bind的方式进行传参，还想要获取事件对象, 事件对象是最后一个参数
  // 参数第二种： 通过给事件处理程序包裹一个箭头函数
  clickFn(id) {
    console.log(id)
  }
}
ReactDOM.render(<Event />, document.getElementById('app'))
```

# 13-点击事件传参

```js
//2. 类组件
class Child extends React.Component {
  render() {
    // 这是错误的示范
    // return <button onClick={this.fn(123)}>按钮</button>
    // 传参 可以跟着 this处理一块解决的
    // 方式1 : bind   bind(this的指向, 参数1,参数2....)
    // return <button onClick={this.fn.bind(this, 123)}>按钮</button>
    //     : 属性初始化语法 -- 不能传参
    // return <button onClick={this.fn1}>按钮</button>
    // 方式2 : 箭头函数
    return <button onClick={() => this.fn(123)}>按钮</button>
  }
  fn(num) {
    console.log('get:', num)
  }
  fn1 = () => {
    console.log('get1:')
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 14-获取事件对象

```js
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 组件
class Child extends React.Component {
  render() {
    // 方式1 : 不传参数 => 事件的`形参`就是 事件对象
    // return <button onClick={this.fn}>按钮</button>
    // 方式2 : bind , `处理函数最后一个参数`就是 事件对象
    // return <button onClick={this.fn1.bind(this, 123, 456)}>按钮</button>
    // 方式3 : 属性初始化语法  和 方式1 同理 不传参数的
    // return <button onClick={this.fn2}>按钮</button>
    // 方式4 : 箭头函数
    return <button onClick={e => this.fn3(e)}>按钮</button>
  }
  fn3(e) {
    console.log('fn3:', e)
  }
  // fn2 = e => {
  //   console.log('get:', e)
  // }
  // fn1(num, num1, e) {
  //   console.log('get:', num, num1, e)
  // }
  // fn(e) {
  //   console.log(e.target)
  // }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 15-条件渲染

```js
/**
 * 1. 拿到数组, 通过 map去遍历, return jsx
 *   {  this.state.list2.map( item => {
 *        return <p>{ item }</p>
 *     })}
 * 2. 遍历要加key, 提高渲染性能   return <p key={item.id}>{ item }</p>
 */
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//2. 类组件
class Child extends React.Component {
  state = {
    list1: ['zs', 'ls', 'ww'],
    list2: [{ id: 1, name: '春' }, { id: 2, name: '飞' }, { id: 3, name: '莲' }]
  }
  render() {
    return (
      <div>
        {this.state.list2.map(item => {
          return (
            <p key={item.id}>
              {item.id}-{item.name}
            </p>
          )
        })}
      </div>
    )
  }
  render1() {
    return (
      <div>
        {this.state.list1.map(item => {
          return <p>{item}</p>
        })}
      </div>
    )
  }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 16 评论案例

```js
//1. 引入
import React from 'react'
import ReactDOM from 'react-dom'
//3. 评论元素组件
function CommentItem(props) {
  console.log(props)
  return (
    <li>
      <p>评论人:{props.name}</p>
      <p>评论内容: {props.content}</p>
    </li>
  )
}
//2. 评论列表组件
class CommentList extends React.Component {
  state = {
    list: [
      { id: 1, name: '春春', content: '今天好冷啊' },
      { id: 2, name: '飞飞', content: '今天好热啊' },
      { id: 3, name: '涛涛', content: '你俩484傻' }
    ]
  }
  render() {
    return (
      <div>
        <h3>评论列表如下</h3>
        <ul>
          {this.state.list.map(item => {
            return (
              <CommentItem key={item.id} name={item.name} content={item.content}/>
            )
          })}
        </ul>
      </div>
    )
  }
}
// (
// <li key={item.id}>
//   <p>评论人:{item.name}</p>
//   <p>评论内容:{item.content}</p>
// </li>
// )
//3. 渲染
ReactDOM.render(<CommentList />, document.getElementById('root'))
```

# 17-react条件渲染

```js
// 条件渲染： 根据不同的条件，渲染不同的内容
// react中的条件渲染，和js的if-else是完全一样
function Welcome() {
  return <div>欢迎回来，尊贵的v12用户</div>
}
function Login() {
  return <div>你好，请先登录</div>
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  // 完成了条件渲染，根据isLogin来渲染不同的内容
  render() {
    if (this.state.isLogin) {
      return <Welcome/>
    } else {
      return <Login />
    }
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
```

# 18-react条件渲染-元素变量

```js
class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 90
    }
  }
  render() {
    // 可以使用变量来保存react的对象
    let content = null
    if (this.state.score >= 90) {
      // 元素变量， 把一个react对象赋值给一个变量
      content = <p>上优</p>
    } else if (this.state.score >= 80) {
      content = <p>优</p>
    } else if (this.state.score >= 70) {
      content = <p>良</p>
    } else if (this.state.score >= 60) {
      content = <p>及格</p>
    } else {
      content = <p>不及格</p>
    }
    return (
      <div>
        <h3>提示消息</h3>
        <p>你本次的成绩是</p>
        {content}
      </div>
    )
  }
}
ReactDOM.render(<Score />, document.getElementById('app'))
```

# 19-react条件渲染-与运算符

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 90,
      age: 18
    }
  }
  render() {
    return (
      <div>
        <h3>提示消息</h3>
        {/* 可以在{}中直接书写任意的js表达式 */}
        {/* {this.state.age >= 18 && <div>成年人</div>}
        {this.state.age < 18 && <div>未成年人</div>} */}
        {this.state.age >= 18 ? <div>成年人</div> : <div>未成年人</div>}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
```

# 20-react条件渲染-阻止组件渲染

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 18
    }
  }
  render() {
    if (this.state.age < 18) {
      // render一旦return null 就不会渲染其他内容
      return null
    }
    return (
      <div>
        <h3>提示消息</h3>
        <p>少儿不宜</p>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
// 条件渲染
// 1. 使用if-else根据条件来渲染不同的组件
// 2. 可以使用变量以及if-else来决定组件显示的内容
// 3. &&  三元表达式  return null

// react的条件渲染和js是完全一致的。
```

# 21-react列表渲染

```js
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['张山', '小赵', '王五', '李四']
    }
  }
  render() {
    let content = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ))
    return (
      <div>
        <h3>人物列表</h3>
        <ul>
          {/* 直接显示了一个数组 */}
          {content}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<List />, document.getElementById('app'))
// react中无论是条件渲染或者是列表渲染，都在js
```

# 22-react列表渲染

```js
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: '张山', age: 18, sex: '男' },
        { id: 2, name: '李四', age: 19, sex: '男' },
        { id: 3, name: '王五', age: 20, sex: '女' }
      ]
    }
  }
  render() {
    // key只有在兄弟之间才有意义，应该唯一
    let content = this.state.list.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>
    ))
    return (
      <table>
        <tbody>{content}</tbody>
      </table>
    )
  }
}
ReactDOM.render(<List />, document.getElementById('app'))
// react中无论是条件渲染或者是列表渲染，都在js
```

# 23-react列表渲染-可以直接在jsx中使用map

```js
class Child extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    list1: ['张山', '王五', '李四'],
    list2: [
      { id: 1, name: '张山' },
      { id: 2, name: '王五' },
      { id: 3, name: '李四' }
    ]
  }
  render() {
    return (
      <table style={{ border: '1px solid #ccc' }}>
        <tbody>
          {this.state.list2.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  // render() {
  //   return (
  //     <ul>
  //       {this.state.list1.map(item => {
  //         return <li>{item}</li>
  //       })}
  //     </ul>
  //   )
  // }
}
//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
```

# 24-案例-评论列表

```js
class Comment extends React.Component {
  constructor(props) {
    super(props)
    // 添加状态
    this.state = {
      list: [
        { id: 1, name: '张三', content: '沙发' },
        { id: 2, name: '李四', content: '板凳' },
        { id: 3, name: '王五', content: '卖瓜子' },
        { id: 4, name: '赵六', content: '今天吃了没' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>评论</h1>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              <h3> 评论人：{item.name}</h3>
              <p>评论内容：{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Comment />, document.getElementById('app'))
```

# 25-案例-评论列表-多组件

```js
// 评论组件
class Comment extends React.Component {
  constructor(props) {
    super(props)
    // 添加状态
    this.state = {
      list: [
        { id: 1, name: '张三', content: '沙发' },
        { id: 2, name: '李四', content: '板凳' },
        { id: 3, name: '王五', content: '卖瓜子' },
        { id: 4, name: '赵六', content: '今天吃了没' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>评论</h1>
        <ul>
          {this.state.list.map(item => (<Item key={item.id} data={item} />))}
        </ul>
      </div>
    )
  }
}
// 评论项组件,没有状态，数据是父组件传递过来的
function Item(props) {
  return (
    <li>
      <h3>
        评论人：
        {props.data.name}
      </h3>
      <p>评论内容 {props.data.content}</p>
    </li>
  )
}
ReactDOM.render(<Comment />, document.getElementById('app'))
```

# 26-案例-评论列表-react中如何设置样式

```js
//react中设置样式，有两种方式
// 1. 给元素添加一个className, 设置一个类样式
// 2. 给元素添加一个style属性，通过style属性设置行内样式
// 在使用style给元素设置样式的时候，style={对象}
class Comment extends React.Component {
  constructor(props) {
    super(props)
    // 添加状态
    this.state = {
      list: [
        { id: 1, name: '张三', content: '沙发' },
        { id: 2, name: '李四', content: '板凳' },
        { id: 3, name: '王五', content: '卖瓜子' },
        { id: 4, name: '赵六', content: '今天吃了没' }
      ],
      bgColor: 'pink'
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.bgColor }}>
        <h1>评论案例</h1>
        <ul style={{ listStyle: 'none' }}>
          {this.state.list.map(item => (
            <Item key={item.id} data={item} />
          ))}
        </ul>
      </div>
    )
  }
}
// 评论项组件,没有状态，数据是父组件传递过来的
function Item(props) {
  let liStyle = { height: 100 }
  return (
    <li style={liStyle}>
      <h3>
        评论人：
        {props.data.name}
      </h3>
      <p>评论内容 {props.data.content}</p>
    </li>
  )
}
ReactDOM.render(<Comment />, document.getElementById('app'))
```

# 27-react表单

```js
// react操作表单的元素，操作表单的目的： 获取到用户输入的内容
// react操作表单： 受控组件  非受控组件
// 受控组件： 在当前组件中的表单元素受到了react的控制，
//1. 当表单元素的内容发生改变，react对应的状态也要发生改变
//2. 当react对应的状态发生改变，表单元素的内容也要发生改变。
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react'
    }
  }
  render() {
    // 一旦给input设置了value属性，value属性对应了组件中的一个状态，受控组件
    // 表单元素的值受到了react的控制，我们发现，表单没办法输入，没办法改变了
    // 除了指定一个vlaue属性，还需要指定onChange事件，用来处理内容的变化
    return (
      <input type="text" value={this.state.username} onChange={this.handleChange}/>
    )
  }
  handleChange = e => {
    // 我们需要改变 state.username的值
    this.setState({
      username: e.target.value
    })
  }
}
ReactDOM.render(<Form />, document.getElementById('app'))
```

# 28-react表单-受控组件-textarea

```js
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react',
      content: '我是内容'
    }
  }
  render() {
    return (
      <div>
        <h3>input</h3>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <h3>textarea</h3>
        <textarea cols="30" rows="10" value={this.state.content}  onChange={this.handleContent} />
      </div>
    )
  }
  handleChange = e => {
    // 我们需要改变 state.username的值
    this.setState({
      username: e.target.value
    })
  }
  handleContent = e => {
    // 获取到文本框的内容
    this.setState({
      content: e.target.value
    })
  }
}
ReactDOM.render(<Form />, document.getElementById('app'))
```

# 29-react表单-受控组件-select

```js
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react',
      content: '我是内容',
      city: 4
    }
  }
  render() {
    return (
      <div>
        <h3>input</h3>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <h3>textarea</h3>
        <textarea cols="30" rows="10" value={this.state.content} onChange={this.handleContent}/>
        <h3>select</h3>
        <select value={this.state.city} onChange={this.handleSelect}>
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
      </div>
    )
  }
  handleChange = e => {
    // 我们需要改变 state.username的值
    this.setState({
      username: e.target.value
    })
  }
  handleContent = e => {
    // 获取到文本框的内容
    this.setState({
      content: e.target.value
    })
  }
  handleSelect = e => {
    this.setState({
      city: e.target.value
    })
  }
}
ReactDOM.render(<Form />, document.getElementById('app'))
```

# 30-react表单-受控组件-通用的处理程序

```js
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react',
      content: '我是内容',
      city: 4
    }
  }
  render() {
    return (
      <div>
        <h3>input</h3>
        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
        <h3>textarea</h3>
        <textarea cols="30" rows="10" value={this.state.content} onChange={this.handleChange} name="content"/>
        <h3>select</h3>
        <select value={this.state.city} onChange={this.handleChange} name="city" >
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
      </div>
    )
  }
  handleChange = e => {
    let name = e.target.name
    // 我们需要改变 state.username的值
    // es6的属性名表达式
    this.state[name] = e.target.value
    this.setState(this.state)
  }
}
ReactDOM.render(<Form />, document.getElementById('app'))
```

# 31-react非受控组件

```js
// 1. 在构造函数中，需要自己创建一个引用  ref
class Form extends React.Component {
  constructor(props) {
    super(props)
    // 1. 创建ref
    this.usernameRef = React.createRef()
    this.buttonRef = React.createRef()
  }
  render() {
    return (
      <div>
        {/* 2. 我们创建的ref可以 在组件的任意地方使用 */}
        <input ref={this.usernameRef} type="text" />
        <button ref={this.buttonRef} onClick={this.get}>
          获取value值
        </button>
      </div>
    )
  }
  get = () => {
    // 获取input框的value值
    // 受控组件： 我们把input框的value值交给react来处理
    // 非受控组件： 我们需要手动的操作DOM，手动获取到DOM的value值
    // refs: 用于操作DOM的
    // 3. 通过this.usernameRef.current
    console.log(this.usernameRef.current.value)
  }
}
ReactDOM.render(<Form />, document.getElementById('app'))
```

# 32-图书管理案例-列表

```js
class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: '红楼梦', desc: '一堆乱七八糟的破事' },
        { id: 2, name: '西游记', desc: '小时候的经典' },
        { id: 3, name: '权威指南', desc: 'js程序员必读' }
      ],
      name: '',
      desc: '',
      id: '',
      index: 3
    }
  }
  render() {
    return (
      <div className="container">
        <div className="form">
          书名：
          <input type="text" value={this.state.name} onChange={this.handleChange}  name="name" />
          描述：
          <input type="text" value={this.state.desc} onChange={this.handleChange} name="desc" />
          <button onClick={this.addBook}>添加</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>编号</th><th>书名</th><th>描述</th><th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>
                  <a href="#" onClick={this.delBook.bind(this, item.id)}>删除</a>|
                  <a href="#" onClick={this.showEdit.bind(this, item)}>修改</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  addBook = () => {
    // 判断是否有id值，如果有，是修改，否则是添加
    if (this.state.id) {
      // 修改
      // 根据id找到需要修改的下标
      let idx = this.state.list.findIndex(item => item.id === this.state.id)
      this.state.list[idx].name = this.state.name
      this.state.list[idx].desc = this.state.desc
    } else {
      // 添加
      // 添加图书
      this.state.list.push({
        id: ++this.state.index,
        name: this.state.name,
        desc: this.state.desc
      })
    }
    // 清空name和desc
    this.state.name = ''
    this.state.desc = ''
    this.state.id = ''
    this.setState(this.state)
  }
  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  delBook(id, e) {
    e.preventDefault()
    // 删除需要id
    // 根据id获取到下标
    let idx = this.state.list.findIndex(item => item.id === id)
    // 删除对应的数据
    this.state.list.splice(idx, 1)
    this.setState(this.state)
  }
  showEdit = (book, e) => {
    e.preventDefault()
    this.state.id = book.id
    this.state.name = book.name
    this.state.desc = book.desc
    this.setState(this.state)
  }
}
ReactDOM.render(<Book />, document.getElementById('app'))
```



