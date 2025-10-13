import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './header.css';
function Header() {
  return (
    <div>
    <div className='header'>
     <NavLink
      to="/"> <span>Home</span></NavLink>
      <NavLink to="settings"> <span>Settings</span></NavLink>
      <NavLink to="usage"> <span>Usage</span>
      </NavLink>
      <NavLink to="users"><span>Users </span></NavLink>
    </div>
    <div><Outlet></Outlet></div>
    </div>
  )
}

export default Header




