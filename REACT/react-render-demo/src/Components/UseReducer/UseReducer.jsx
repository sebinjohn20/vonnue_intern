import Reac,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':return state+1
        case 'decerement': return state-1
        case 'reset': return initialState
        default : return state
    }

}
const UseReducer = () => {
    const [count,dispatch]=useReducer(reducer,initialState)
  console.log("usereduce Render")
    return (
    <div>
      <div>{count}</div>
      
      <button onClick={()=>dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
    
    
    
    </div>
  )
}

export default UseReducer


