import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Child extends Component {
  static propTypes  = {
    name:PropTypes.string.isRequired
  }
  static defaultProps = {
    age: 18
  }
  constructor(props){
    console.log(1111,props);
    super()
  }
  render() {
    return (
      <>
        <h2>name:{this.props.name}</h2>
        <h2>age:{this.props.age}</h2>
      </>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <Child name="cgj"/>
      </div>
    )
  }
}