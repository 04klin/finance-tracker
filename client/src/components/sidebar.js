import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {

  const [sideTitle, setSideTitle] = useState('DASHBOARD');

  function updateTitle(e) {
    setSideTitle(e.target.textContent)
  }

  return (
    <div className="sidebar-content">
      <label className='side-title'>{sideTitle}</label>
      
      <ul className='side-button-container'>
        <li className='side-button'><Link to="/dashboard" onClick={updateTitle}>Dashboard</Link></li>
        <li className='side-button'><Link to="/profile" onClick={updateTitle}>Profile</Link></li>
        <li className='side-button'><Link to="/signup" onClick={updateTitle}>Signup</Link></li>
        <li className='side-button'><Link to="/login" onClick={updateTitle}>Login</Link></li>
        <li className='side-button'><Link to="/notification" onClick={updateTitle}>Notification</Link></li>
        <li className='side-button'><Link to="/manage" onClick={updateTitle}>Manage</Link></li>
        <li className='side-button'><Link to="/map" onClick={updateTitle}>Map</Link></li>
      </ul>
    </div>
    
  )
}

export default Sidebar;