import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("Button Clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
