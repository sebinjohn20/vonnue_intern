import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            isLoggedIn: true
      }
    }
    
  render() {

    // *********Conditional Rendering using if else**********

    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Sebin</div>
    //     )
    // }
    // else{
    //     return (
    //     <div>Welcome Guest</div>
    //     )
    // }


    // *********using element variable********

    // let Message
    // if(this.state.isLoggedIn){
    //     Message=<div>Welcome  Sebin</div>
    // }
    // else{
    //     Message=<div> Welcome Guest</div>
    // }
    // return <div>{Message}</div>



    // ***********using ternary conditional operator*********

    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Sebin </div>
    //     :
    //     <div>Welcome Guest</div>

    // )




    // **********short circuit operator*********


  return this.state.isLoggedIn && <div> Welcome Sebin</div>



    // return (
    //     <div>
    //   <div>Welcome Sebin</div>
    //   <div>Welcome Guest</div>
    //   </div>
    // )
  }

}
export default UserGreeting;














