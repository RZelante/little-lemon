import React from 'react'
import BannerImg from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
        <section className='home-header-section'>
            {/* Banner Text */}
            <div className='banner'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to Little Lemon, where the vibrant flavors of the Mediterranean meet fresh, local ingredients. Enjoy a taste of Greece, Italy, and beyond with dishes crafted from time-honored recipes and bold, seasonal flavors.</p>
                <Link to='/reservations'>
                  <button data-testid='reserve' aria-label='On Click'>Reserve a Table</button>
                </Link>
            </div>
            {/* Banner Image */}
            <img src={BannerImg} className='banner-img' alt="Banner" />
        </section>

    </header>
  )
}

export default Header