import React, { useContext, useEffect, useRef, useState } from 'react';
import './label.css';
import { MyContext, MyNewContext } from '../Pages/Mycontext';
import Tooltip from './Tooltip';

function Label({ isActive, onAction }) {
  const val = useContext(MyContext);
  const v = useContext(MyNewContext);
  const refObj = useRef();
  const [showTooltip, setShowTooltip] = useState(false);
 const labelRef=useRef()

  useEffect(()=>{
  if(showTooltip){
      const width1=labelRef.current.getBoundingClientRect().width;
      const width2=refObj.current.getBoundingClientRect().width;
      refObj.current.style.left=width2-width1
  }
})
  if (val === false) {
    return null; // Hide label if context says so
  }

  const handleMouseEnter = () => {
   
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="list-label-item-container">
      <span ref={labelRef}
        className="list-label-item"
        style={{ background: isActive ? 'green' : 'orange' }}
        onClick={() => onAction(isActive ? 'Active' : 'Non-active')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isActive ? 'Active' : 'Non-Active'}
      </span>

     <Tooltip ref={ref} showTooltip={showTooltip}></Tooltip>
    </div>
  );
}

export default Label;





















