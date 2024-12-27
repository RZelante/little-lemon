import React from 'react'
import BookingImg from '../images/Reservation.webp'


function BookingPage() {
  return (
    <header className='header'>
        <div className='booking-container'>
            <div >
                <img src={BookingImg} className='booking-img' alt="Reservation Image" />
                <h2>Reserve a Table</h2>
            </div>
            <div className='button-list'>
                <ul>
                    <li>Select Occasion
                        <ul><button className='ocassion-btn'>Occasion</button></ul>
                    </li>
                    <li>Number of Guests
                        <ul><button className='guests-btn'>Guests</button></ul>
                    </li>
                    <li>Table Preference
                        <ul><button className='table-btn'>Table</button></ul>
                    </li>
                </ul>
            </div>
        </div>
        
    </header>
  )
}

export default BookingPage