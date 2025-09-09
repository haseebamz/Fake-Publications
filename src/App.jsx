import { useState } from 'react'
import './App.css'
import Header from './components/Navbar/Header'
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import ContactUs from './Pages/ContactPage/ContactUs';
import Media from './Pages/MediaPage/Media';
import Login from './Pages/LoginPage/Login';


function App() {

  return (
    <div className='wrapper' >
      <Header />
      <Routes >
        <Route path="/" element={<Home />} ></Route>
        <Route path="/ContactUs" element={<ContactUs />} ></Route>
        <Route path="/Media" element={<Media />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
      </Routes>
    </div>
  )
}

export default App
