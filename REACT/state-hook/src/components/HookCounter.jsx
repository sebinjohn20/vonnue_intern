import React,{useState} from 'react'

function HookCounter() {
  const [count,Setcount]=  useState(0)
  return (
    <div>
      <button onClick={()=>Setcount(count +1)}> Count { count}</button>
    </div>
  )
}

export default HookCounter

