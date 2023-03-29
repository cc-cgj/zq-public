import React, { Component } from 'react'

const UserContext  = React.createContext({
  name:"cgj"
})
console.log(111,UserContext);
class Test extends Component{
  static contextType = UserContext
  render(){
    console.log(111,this.context);
    return (
      <h2>{this.context.name}</h2>
    )
  }
}

export default class Context extends Component {
  static contextType = UserContext
  render() {
    console.log(this.context);
    return (
      <UserContext.Provider value={this.context}>
        <Test />
      </UserContext.Provider>
    )
  }
}
