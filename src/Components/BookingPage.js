import React from 'react'
import BookingImg from '../images/Reservation.webp'
import BookingForm from './BookingForm'



function BookingPage(props) {

  return (
    <header className='header'>
        <div className='booking-container'>
            <div >
                <img src={BookingImg} className='booking-img' alt="Reservation" />
                <h2>Reserve a Table</h2>
            </div>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
    </header>
  )
}

export default BookingPage