import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecyleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sebin'
      }
      console.log("LifeCyleA Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecyleA getDerivesStateFromProps")
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
 shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
 }
 getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null
 }
  componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate')
  }
  changeState=()=>{
    this.setState({
        name:"Sebin John"
    })
  }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>
            LifeCyleA
        </div>
        <button onClick={this.changeState}> Change State</button>
        <LifecycleB ></LifecycleB>
        
      </div>
    )
  }
}

export default LifecyleA


