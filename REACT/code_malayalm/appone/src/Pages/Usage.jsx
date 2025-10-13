import React, { useEffect, useReducer, useState } from 'react'
import './usage.css'
import UsageReducer from '../Reducer/UsageReducer'
const intialState={
  value:0
}


function Usage() {
  // const [value,setValue]=  useState(0)
  // const[color,setColor]=useState('white')
  const[state,dispatch]=useReducer(UsageReducer,intialState)
    
// useEffect(()=>{
//   console.log("Effect")
//   return () => {
//     console.log("Clean Up")
//   }
// }, [value]);






  return (
      <div className='usage'>
      <div className='usage-item' style={{ background: state.color }}>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <label>{state.value}</label>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>

      <button onClick={() => dispatch({ type: 'green' })}>Green</button>
      <button onClick={() => dispatch({ type: 'blue' })}>Blue</button>
    </div>
  )
}

export default Usage

















