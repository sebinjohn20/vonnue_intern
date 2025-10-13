
import './App.css';
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Settings from './Pages/Settings';
import Usage from './Pages/Usage';

import Home from './Pages/Home';
import Header from './Components/Header';
import Details from './Pages/Details';
import NoFound from './Pages/NoFound';
import Marks from './Pages/Marks';
import Sports from './Pages/Sports';
import Remarks from './Pages/Remarks';
import React, { Suspense } from 'react';
const MyUsers = React.lazy(() => import('./Pages/Users'));

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div> Loading...</div>}>
    <Routes>
    <Route path="/" element={<Header></Header>} >
    <Route index element={<Home></Home>}></Route>
       <Route path="settings" element={<Settings></Settings>} ></Route>
   <Route path="usage" element={<Usage></Usage>}></Route>
   <Route path="users" >
    <Route index element={<MyUsers></MyUsers>}/>
      <Route path=":userId" element={<Details />}>
          <Route index element={<Marks />} />       
          <Route path="sports" element={<Sports />} />
          <Route path="remarks" element={<Remarks />} />
        </Route>
   </Route>

    <Route path='*' element={<NoFound></NoFound>}></Route>
    
    </Route>

 
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;






 

















