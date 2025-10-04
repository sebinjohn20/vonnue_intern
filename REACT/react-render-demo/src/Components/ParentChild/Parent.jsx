import React,{useState} from 'react'

const useState=()=>{
    const[count,setCount]=useState(0)
    console.log('parent Render')
}
function Parent() {
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>Count - {count}</button>
      <button onClick={()=>setCount(0)}>Count to 0</button>
    <button onClick={()=>setCount(5)}>Count to 5</button>
    </div>
  )
}

export default Parent
