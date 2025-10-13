import React from 'react'
import './remarks.css';

import { useOutletContext } from 'react-router-dom'

function Remarks() {
    const {remarks}=useOutletContext()
  return (
    <div className='remarks'>
    {
        remarks.map((item,index)=>{
            return <div key={index}>{item}</div>
        })
    }
    </div>
  )
}

export default Remarks
