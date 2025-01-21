import React, { useEffect } from 'react'
import Header from './Header'
import Testimonials from './Testimonials'
import CompanyHistory from './CompanyHistory'
import BookingPage from './BookingPage'
import Menu from './Menu'
import BookingConfirmed from './BookingConfirmed'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useReducer } from 'react'




function Main(props) {

  const seedRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
      return (s = s * a % m) /m;
    }
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seedRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData) {
    return true;
  }

  const initializeTimes = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)

  function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)){
      navigate('/confirmed');
    }
  }


  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<CompanyHistory/>}/>
            <Route path='/reservations' element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
            <Route path='/confirmed' element={<BookingConfirmed/>} />
        </Routes>

        <Menu/>
        <Testimonials/>
        <CompanyHistory/>
    </main>

  )
}

export default Main;