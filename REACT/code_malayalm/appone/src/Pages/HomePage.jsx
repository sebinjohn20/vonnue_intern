import React, { useState, useEffect, useMemo, use, useCallback } from 'react';
import Tools from '../Components/Tools';
import AddNew from '../Components/AddNew';
import SimpleList from '../list/SimpleList';
import { MyContext, MyNewContext } from './Mycontext';
import JustInfo from './JustInfo';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [activeState, setActiveState] = useState('all');
  const [showLabel, setShowLabel] = useState(true);
  const [message, setMessage] = useState('');

  // Fetch initial data
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // Example of componentDidUpdate for 'message'
  useEffect(() => {
    if (message !== 'message') {
      setMessage('message');
    }
  }, [message]);

  // Refresh data
  const handleRefresh = () => {
    fetch('./data2.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  // Add new item
  const handleAdd = (newItem) => {
    setData((prev) => [...prev, newItem]);
  };

  // Dropdown filter change
  const onListChange = (evt) => {
    setActiveState(evt.target.value);
  };

  // Delete an item
  const handleDelete = (item) => {
    setData((prev) => prev.filter((el) => el.id !== item.id));
  };

  // Label click filter
  const handleLabelClick = (state) => {
    setActiveState(state);
  };

  // Show/hide label
  const handleShowLabel = (evt) => {
    setShowLabel(evt.target.checked);
  };

  // Filter list based on activeState
  const filteredList = data.filter((item) => {
    const state = activeState.toLowerCase();
    if (state === 'all') return true;
    if (state === 'active') return item.isActive;
    if (state === 'non-active') return !item.isActive;
    return false;
  });
 
      // const value= useMemo (()=>{
      // return {
      //     'key':'value1',
      //     activeState:activeState

      // }
      // },[activeState])


  const handleClick= useCallback(()=>{
   
       console.log('Clicked',activeState)

    
 },[activeState])
  return (
    <div>
      <label>
        <input type="checkbox" checked={showLabel} onChange={handleShowLabel} /> Show Label
      </label>

      <MyNewContext.Provider value={100}>
        <MyContext.Provider value={showLabel}>
          <Tools labelValue={activeState} onAction={onListChange} onAdd={handleAdd} onRefresh={handleRefresh}>
            <SimpleList data={filteredList} onDelete={handleDelete} onLabelClick={handleLabelClick} />
          </Tools>
          <JustInfo onClick={handleClick}  />
        </MyContext.Provider>
      </MyNewContext.Provider>
    </div>
  );
};

export default HomePage;







