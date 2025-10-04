import React, { Component } from 'react'
import './label.css'

class Label extends Component {
  render() {
    const { isActive, onAction } = this.props
    const style = { background: isActive ? "green" : "orange" }

    return (
      <span 
        className='list-label-item' 
        style={style}
        onClick={() => onAction(isActive ? 'Active' : 'Non-active')}
      >
        {isActive ? "Active" : "Non-Active"}
      </span>
    )
  }
}

export default Label
