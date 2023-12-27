import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard';
import Manage from './pages/Manage';
import Map from './pages/Map'
import Notification from './pages/Notification'
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className="sidebar flex-child">
          <Sidebar />
        </div>
        
        <div className="main-content flex-child">
          <Navbar />
          <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/notification' element={<Notification/>}/>
            <Route path='/map' element={<Map/>}/>
            <Route path='/manage' element={<Manage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </div>      
    </BrowserRouter>
  )
}

export default App;
