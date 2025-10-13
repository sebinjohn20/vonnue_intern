import React, { useContext } from 'react'
import './label.css'
import { MyContext } from '../Pages/HomePage'
import { MyNewContext } from '../Pages/HomePage'
function Label({ isActive, onAction }) {
  const val = useContext(MyContext) 
  const v=useContext(MyNewContext)
  const style = { background: isActive ? "green" : "orange" }

  if (val === false) {
    return null
  }

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

export default Label





