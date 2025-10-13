import React, { useEffect } from 'react'
import Label2 from './Label2'
import './Listitem.css'

function ListItem({ title, desc, isActive, onDelete, onLabelClick }) 

{
  useEffect(()=>{
  
})



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
        <Label2 isActive={isActive} onAction={onLabelClick} />
      </div>
    </div>
  )
}

export default ListItem
