import React, { useReducer } from 'react'

const initalState={
    firstCounter:0,
    secondCounter:10
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return{...state,firstCounter: state.firstCounter-action.value}
         case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value}
        case 'decrement2':
            return{...state,secondCounter: state.secondCounter-action.value}
        case 'reset':
            return initalState
            default:
                return state
    }
}
function CounterOne() {
const[count,dispatch] =  useReducer(reducer,initalState)
  return (
    <div>                                                                                                                     
        <div> 
          FirstCounter - {count.firstCounter} </div>
          <div>SecondCounter -{count.secondCounter}</div>
      <button onClick={()=> dispatch( {type:'increment',value:1 })}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement', value:2})}>Decrement</button>
      <button onClick={()=> dispatch( {type:'increment',value:5 })}>Increment5</button>
      <button onClick={()=>dispatch({type:'decrement', value:5})}>Decrement5</button>
      
      <button onClick={()=> dispatch( {type:'increment2',value:1 })}>Increment Counter2</button>
      <button onClick={()=>dispatch({type:'decrement2', value:2})}>Decrement Counter2</button>
      <button onClick={()=>dispatch( {type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterOne




