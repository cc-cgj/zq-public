import React, { Component } from 'react'

const UserContext = React.createContext({
  name: "cgj"
})

function Header() {
  return (
    <UserContext.Consumer>
      {
        (value) => {
          console.log(value);
          return <h2>{value.name}</h2>
        }
      }
    </UserContext.Consumer>
  )
}

export default class App extends Component {
  static contextType = UserContext
  render() {
    // console.log(this.context);
    return (
      <UserContext.Provider value={this.context}>
        <Header />
      </UserContext.Provider>
    )
  }
}
