
import React, { Component } from 'react'

import { EventEmitter } from 'events'

const e = new EventEmitter()

class Brother1 extends Component {
  constructor(){
    super()
    e.addListener('toData', this.handleData)
  }
  componentDidMount() {
    // e.addListener('toData', this.handleData)
  }
  componentWillUnmount() {
    e.removeAllListeners('toData', this.handleData)
  }
  handleData = (...data) => {
    console.log(data);
  }
  render() {
    return (
      <h2>Brother1</h2>
    )
  }
}
class Brother2 extends Component {
  render() {
    return (
      <div>
        <h2>Brother2</h2>
        <button onClick={this.handleToData}>Brother2传递数据</button>
      </div>
    )
  }
  handleToData() {
    e.emit('toData', 'Brother2', {
      data: 111
    })
  }

}

export default class App extends Component {
  render() {
    return (
      <div>
        <Brother1 />
        <Brother2 />
      </div>
    )
  }
}