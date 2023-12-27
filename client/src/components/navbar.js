import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'


const Dashboard = () => {

  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return(
    <nav className='navbar flex'>
      <div className="logo-half flex">
      </div>
      <div className="profile-icon" onClick={handleClick}>
        <i className={click ? 'arrow down' : 'arrow up'} />
      </div>

      <div>
      <ul className="dropdown">
        <li className='nav-item'><Link to='/about' onClick={closeMenu}>About</Link></li>
        <li className='nav-item'><Link to='/contact' onClick={closeMenu}>Contact</Link></li>
        <li className='nav-item'><Link to='/login' onClick={closeMenu}>Login</Link></li>
        <li className='nav-item'><Link to='/signup'onClick={closeMenu}>Signup</Link></li>
      </ul>
    </div>    
      
    </nav>
  )
}

export default Dashboard;