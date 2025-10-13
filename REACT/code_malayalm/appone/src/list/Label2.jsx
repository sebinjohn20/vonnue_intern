import React, { Component } from 'react'
import './label.css'
import { MyContext } from '../Pages/Mycontext'

class Label2 extends Component {
  render() {
    const { isActive, onAction } = this.props
    const style = { background: isActive ? 'green' : 'orange' }
    const val = this.context

    if (val === false) return null

    return (
      <span
        className="list-label-item"
        style={style}
        onClick={() => {
          if (typeof onAction === 'function') {
            onAction(isActive ? 'Active' : 'Non-active')
          }
        }}
      >
        {isActive ? 'Active' : 'Non-Active'}
      </span>
    )
  }
}

Label2.contextType = MyContext

export default Label2


