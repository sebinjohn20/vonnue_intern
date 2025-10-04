import React from 'react'
import UseInput from './Hooks/UseInput'

function UserForm() {

    const [firstName,bindFirstName,resetFirstname]=UseInput('')
    const [lastName,bindLastName,resetLastName]=UseInput('')
    const submitHandler=e=>{
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstname()
    resetLastName()
}
  return (
    <div>
    
      <form onSubmit={submitHandler} >
        <div>
            <label>First Name:</label>
            <input type="text" {...bindFirstName} />
        </div>
        <div>
            <label >Last Name:</label>
            <input type="text" {...bindLastName}/>
        </div>
        <button>Submit</button>
      </form>
    </div>


  )
}

export default UserForm















