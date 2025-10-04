import React, {useState} from 'react'

const initialState={
    fname:'Sebin',
    lname:'John'
}

function ObjectUseState() {
    const [person,setPerson]=useState(initialState)
    const changeName=()=>
    {
        
        const newPerson={...person}
        newPerson.fname='clark'
        newPerson.lname='kent'
        setPerson(newPerson)



    }
    console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName} >{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
