import React, { Component, PureComponent } from 'react'

class ProductList extends PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.friends.map((item, index) => (
            <li key={item.name}>{item.name}</li>
          ))
        }
      </ul>
    )
  }
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [
        {
          name: "cgj2"
        },
        {
          name: "cgj1"
        }
      ]
    }
    this.friends = [
      {
        name: "cgj1"
      },
      {
        name: "cgj2"
      }
    ]
    this.addName = this.addName.bind(this)
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.friends.map((item, index) => (
              <li key={item.name}>{item.name}</li>
            ))
          }
        </ul>
        <h2>----------------</h2>
        <ProductList friends={this.friends} />
        <button onClick={this.addName}>添加</button>
      </div>
    )
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(this.friends,nextState);
  //   return true
  // }
  addName() {
    const newData = { name: "cgj3" }

    const friends = this.friends
    friends.push(newData)
    this.setState({
      friends
    })
    // const friends = this.friends 
    // friends.push(newData)
    // this.setState({
    //   friends: this.aa.friends.concat(newData)
    // })
  }
}
