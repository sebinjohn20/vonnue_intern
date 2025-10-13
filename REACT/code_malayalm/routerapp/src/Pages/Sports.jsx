import React from 'react'
import './sports.css'
import { useOutletContext } from 'react-router-dom'
function Sports() {
    const {sports}=useOutletContext()
  return (
    <div className='sports'>
        {
            Object.keys(sports).map((item,index)=>{
                return(
                    <div key={index}>
                        <div>
                            {item}

                        </div>
                        <div>
                            {sports[item]>0 ? 'Position' + sports[item] :'Participated'}
                        </div>
                    </div>
                )
            })
        }
   
    </div>
  )
}

export default Sports







