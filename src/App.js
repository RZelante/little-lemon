import './App.css';
import React from 'react';

import Nav from './Components/Nav.js';
import Header from './Components/Header.js';
import Menu from './Components/Menu.js';
import Testimonials from './Components/Testimonials.js'
import CompanyHistory from './Components/CompanyHistory.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Menu/>
      <Testimonials/>
      <CompanyHistory/>
      <Footer/>
    </>
  );
}

export default App;
