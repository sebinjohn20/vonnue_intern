import React ,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0
    const[count,Setcount]=useState(initialCount)

    const incrementFive=()=>{
        for(let i = 0; i<5; i++){
            Setcount(prevCount=> prevCount +1)
        }
    }
  return (
    <div>
      count:{count}
      <button onClick={()=>Setcount(initialCount)}>Reset</button>
      <button onClick={()=>Setcount(prevCount=> prevCount +1)}>Increment</button>
      <button onClick={()=>Setcount(prevCount=> prevCount -1)}>Decrement</button>
        <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default HookCounterTwo






