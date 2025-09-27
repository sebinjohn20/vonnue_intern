import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
  render() {
    console.log("Pure Componet Render")
    return (
      <div>
        <h2>Pure Component {this.props.name}</h2>
      </div>
    )
  }
}

export default Purecomp













