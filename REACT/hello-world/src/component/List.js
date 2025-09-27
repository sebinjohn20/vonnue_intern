import React from 'react'
import Person from './Person'

function List() {
    // const names =['Bruce','Clark','Diana']
    const names=['Bruce','Clark','Diana']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age: 30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Clark',
            age:25,
            skill:'Angular'
        }
    ]
    const nameList=names.map((name,index)=> <h2 key ={index}>{name}</h2>)
    // const nameList=  names.map( (names)=> <h2>{names}</h2>)
//  const personsList= persons.map(person=> 
//     <Person person={person}></Person>
//  )
//   const personsList= persons.map(person => <Person key ={person.id} person={person}/>)
//   return (<div>{personsList}</div>)
 return (<div> {nameList}</div>)
}

export default List








