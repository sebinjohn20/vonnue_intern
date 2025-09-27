import React, { Component } from 'react'

class ClickCounter2 extends Component {
  
  render() {
    const {count,incrementCount} =this.props
    return (
      <button onClick={incrementCount}>Clicked {count} Times</button>
    )
  }
}

export default ClickCounter2
