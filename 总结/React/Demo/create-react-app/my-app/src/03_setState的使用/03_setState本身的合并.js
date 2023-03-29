import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      message: "Hello World"
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    )
  }
  // 当有多个setState时，会进行队列循环，即只有最后一个setState执行完之后才会进行组件的更新(instance、render等)
  increment() {
    /**
     * @title setState本身被合并
     * @detail
     *    1.先生成队列
     *    2.循环队列，合并旧的state和新的state(Object.assign({}, prevState, partialState))，
     * 当前队列的prevState对应的是上一级队列newState，循环结束，取出最新的newState
     *    3.将newState赋值给intance
     * @warn 当setState函数的参数为object，新的state都是原instance里面的值 //partialState = update.payload;
     */
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    
    /**
     * @title setState合并时进行累加
     * @detail
    *    1.先生成队列
     *    2.循环队列，合并旧的state和新的state(Object.assign({}, prevState, partialState))，
     * 当前队列的prevState对应的是上一级队列newState，循环结束，取出最新的newState
     *    3.将newState赋值给intance
     * @warn 当setState函数的参数为function时，新的state都是函数的返回值 update.payload.call(instance, prevState, nextProps)
     */
    this.setState((oldState, newProps) => {
      return {
        count: oldState.count + 1
      }
    })
    this.setState((oldState, newProps) => {
      return {
        count: oldState.count + 1
      }
    })
    this.setState((oldState, newProps) => {
      return {
        count: oldState.count + 1
      }
    })
  }
}
