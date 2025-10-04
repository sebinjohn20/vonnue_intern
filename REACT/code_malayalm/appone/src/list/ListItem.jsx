import React from 'react'
import Label from './Label'
import './Listitem.css'

function ListItem({ title, desc, isActive, onDelete, onLabelClick }) {
  return (
    <div className='list-item'>
      <hr />
      <div className='list-title'>
        <h4>{title}</h4>
        <button onClick={onDelete}>Delete</button>
      </div>
      <div className='list-desc'>
        {desc}
      </div>
      <div className='list-label'>
        <Label isActive={isActive} onAction={onLabelClick} />
      </div>
    </div>
  )
}

export default ListItem
