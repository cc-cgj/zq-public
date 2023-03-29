import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "Hello World"
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>修改(setTimeout)</button>
        <br/>
        <button id="btn">原生修改</button>
      </div>
    )
  }
  componentDidMount() {
    // 原生事件
    document.querySelector('#btn').addEventListener('click', () => {
      this.setState({
        message: "cgj"
      })
      console.log(this.state.message);
    })
  }
  changeText() {
    // setTimeout 宏任务
    setTimeout(() => {
      this.setState({
        message: "cgj"
      })
      console.log(this.state.message);
    }, 0)
  }
}
