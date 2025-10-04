import logo from './logo.svg';
import './App.css';
import Componentc from './components/Componentc';
import React from 'react';

export const UserContext = React.createContext(); 
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Sebin'}>
        <ChannelContext.Provider value={'Vounne'}>
       <Componentc />
        
        </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default App;





