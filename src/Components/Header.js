import React from 'react'
import BannerImg from '../images/restauranfood.jpg'
import BookingPage from './BookingPage'

function Header() {
  return (
    <header className='header'>
        <section>
            {/* Banner Text */}
            <div className='banner'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to Little Lemon, where the vibrant flavors of the Mediterranean meet fresh, local ingredients. Enjoy a taste of Greece, Italy, and beyond with dishes crafted from time-honored recipes and bold, seasonal flavors.</p>
                <button>Reserve a Table</button>
            </div>
            {/* Banner Image */}
            <div className='banner-img'>
                <img src={BannerImg} alt="Banner Image" />
            </div>
        </section>

    </header>
  )
}

export default Header