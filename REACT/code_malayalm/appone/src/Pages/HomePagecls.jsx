import React, { Component } from 'react';
import Tools from '../Components/Tools';

import AddNew from '../Components/AddNew';

import SimpleList from '../list/SimpleList';
 import { MyContext, MyNewContext } from './Mycontext'; 
import JustInfo from './JustInfo';
class HomePage extends Component {
  state = {
    data: [],
    activeState: 'all',
    showLabel:true
  }

  componentDidMount(){
   
    fetch('./data.json')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      this.setState({
        data:data
      })
    })
  }
  handleRefresh=()=>{
   
    fetch('./data2.json')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      this.setState({
        data:data
      })
    })
  }
componentDidUpdate(prevProps,preState){

  if(preState.message!==this.state.message){
  this.setState({
    message:'message'
  })
}
}






  // Add new item
  handleAdd = (newItem) => {
    this.setState((prev) => ({
      data: [...prev.data, newItem]
    }));
  }

  // Dropdown filter change
  onListChange = (evt) => {
    this.setState({ activeState: evt.target.value });
  }

  // Delete an item
  handleDelete = (item) => {
    const newData = this.state.data.filter(el => el.id !== item.id);
    this.setState({ data: newData });
  }

  // Label click filter
  handleLabelClick = (state) => {
    this.setState({ activeState: state });
  }
  handleShowLabel=(evt)=>{
    this.setState({
      showLabel:evt.target.checked
    })
  }

  render() {
    const { data, activeState } = this.state;

    // Filter list based on activeState
    const filteredList = data.filter(item => {
      const state = activeState.toLowerCase();
      if (state === 'all') return true;
      if (state === 'active') return item.isActive;
      if (state === 'non-active') return !item.isActive;
      return false;
    });

    return (
      <div>
        <input type="checkbox" checked={this.state.showLabel} onChange={this.handleShowLabel} /> Show Label
        <MyNewContext.Provider>
      <MyContext.Provider value={this.state.showLabel}>
      <Tools labelValue={activeState} onAction={this.onListChange} onAdd={this.handleAdd} onRefresh={ this.handleRefresh}>
     <SimpleList
          data={filteredList} 
          onDelete={this.handleDelete} 
          onLabelClick={this.handleLabelClick} 
        />
      </Tools>
      <JustInfo activeState={activeState}></JustInfo>
      </MyContext.Provider>
      </MyNewContext.Provider>
      </div>
    )
  }
}

export default HomePage;







