import React, { useState } from 'react'
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';


function Nav() {
    {/* Functionality for the menu-icon */}
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className='logo'>
            <img src={logo} alt="Little Lemon logo" />
        </a>

        {/* hamburger menu */}
        <div className='menu-icon' onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
                <Link to='/reservations'>Reservations</Link>
            </li>
            <li>
                <Link to='/'>Order Online</Link>
            </li>
            <li>
                <Link to='/'>Login</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Nav