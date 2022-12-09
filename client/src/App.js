import React, { Component, useEffect } from 'react';

import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import CustomNavbar from './components/NavbarComponents/CustomNavbar';
import Dashboard from './components/DashboardCompononts/Dashboard';

import { loadUser } from './store/actions/authactions';
import Writeblog from './pages/Writeblog';
import Footer from './components/FooterComponents/Footer';
import Bloglist from './pages/Bloglist';
import Blogone from './pages/Blogone';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]
  )
  return (
    <div className='App'>
      {/* <Router> */}
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/write_blog' element={<Writeblog />} />
        <Route exact path='/blogs' element={<Bloglist />} />
        <Route exact path='/blog/:blog_id' element={<Blogone />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* </Router> */}
      <Footer />
    </div>

  );
}

export default App;
