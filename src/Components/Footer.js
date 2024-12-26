import React from 'react'
import footerLogo from '../images/FooterLogo.png'

function Footer() {
  return (
    <footer className='footer'>
    <img src={footerLogo} alt="Footer logo" />
    <ul className='footer-links'>
        <li>Doormat Navigation
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </li>
        <li>Contact
            <ul>
                <li><a href="">Address</a></li>
                <li><a href="">Phone Number</a></li>
                <li><a href="">Email</a></li>
            </ul>
        </li>
        <li>Social Media Links
            <ul>
                <li><a href="">Address</a></li>
                <li><a href="">Phone Number</a></li>
                <li><a href="">Email</a></li>
            </ul>
        </li>
    </ul>
</footer>
  )
}

export default Footer