import { Suspense } from 'react';
import React, { useState} from 'react';

const MyComp=React.lazy(()=>{
  return  import( '../Components/Section')
})


function Settings() {
  const [state,setState]=useState(false)
  return (
    <div className="page">
      <h1>Settings ⚙️</h1>
      <p>Manage your preferences, account, and app configuration here.</p>
      {state && (
        <Suspense fallback={<div>Loading...</div>}>
          <MyComp />
        </Suspense>
      )}
      <button onClick={() => {
        setState(true);
      }}>Click</button>
    </div>
  );
}

export default Settings











