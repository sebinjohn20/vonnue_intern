import React from 'react';
import './nofound.css';
import { Link } from 'react-router-dom';


function NoFound() {
  return (
    <div className="page notfound-page">
      <h1>404 🚫</h1>
      <p>Sorry, Page Not Found</p>
      <div>
      <Link to="/"> Go Home</Link>
      </div>
    
    </div>
  );
}

export default NoFound;
