import React, { Component} from 'react'
import RegComp from './RegComp';
import Purecomp from './Purecomp';
import Memo from './Memo';

 class Parentcomp extends  Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Sebin"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Sebin"
            })
        }, 2000);
    }
    
  render() {
    console.log("*********Parent comp render *******")
    return (
      <div>
        Parent Component
        <Memo name={this.state.name}></Memo>
        {/* <RegComp name={this.state.name}></RegComp>
        <Purecomp name={this.state.name }></Purecomp> */}
      </div>
    )
  }
}

export default Parentcomp






