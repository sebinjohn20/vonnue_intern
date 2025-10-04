import React, { Component } from 'react'
import './Tools.css'
import AddNew from './AddNew'

class Tools extends Component {
  render() {
    const { children, onAction,labelValue, onAdd,onRefresh} = this.props

    return (
      <div className='list-tools'>
        <div className='list-header'>
          <select value={labelValue} onChange={onAction} name="status">
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Non-active">Non-Active</option>
          </select>
          <AddNew onAdd={onAdd}></AddNew>
          <div className="refresh" onClick={onRefresh}>
                Refresh
            </div>
        </div>
        {children}
        <div className='list-footer'>
          Some info here
        </div>
      </div>
    )
  }
}

export default Tools


