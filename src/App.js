import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav.js';
import Header from './Components/Header.js';
import Menu from './Components/Menu.js'
import Testimonials from './Components/Testimonials.js'
import CompanyHistory from './Components/CompanyHistory.js'
import Footer from './Components/Footer.js';
import BookingPage from './Components/BookingPage.js';



function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/about' element={<CompanyHistory/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservations' element={<BookingPage/>}/>
      </Routes>
      <Menu/>
      <Testimonials/>
      <CompanyHistory/>
      <Footer/>
    </>
  );
}

export default App;
