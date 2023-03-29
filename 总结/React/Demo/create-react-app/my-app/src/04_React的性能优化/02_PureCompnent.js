import React, { Component,PureComponent } from 'react'

class Header extends Component {
  render() {
    console.log("Header的render触发了");
    return (
      <div>
        <h2>Header</h2>
      </div>
    )
  }
}

class Main extends PureComponent {
  constructor() {
    super()
    this.list = [
      '商品'
    ]
  }
  render() {
    console.log("Main的render触发了");
    return (
      <div>
        <ProductList list={this.list} />
      </div>
    )
  }
}

function ProductList(props) {
  console.log("ProductList触发了");
  const { list } = props
  return (
    <ul>
      {
        list.map(item => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
  )
}

class Footer extends Component {
  render() {
    console.log("Footer的render触发了");
    return (
      <div>
        <h2>Footer</h2>
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.counte = 0
  }
  render() {
    return (
      <div>
        <h2>{this.counte}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  increment() {
    this.setState({
      counte: this.counte+=1
    })
  }
}