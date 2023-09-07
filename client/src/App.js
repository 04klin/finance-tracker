import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'

import Dashboard from './pages/Dashboard';
import Manage from './pages/Manage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/about' element={<Manage/>}/>
      <Route path='/contact' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
