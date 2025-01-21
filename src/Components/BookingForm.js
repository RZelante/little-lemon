import React, { useState } from 'react'


function BookingForm(props) {
    const [date, setDate] = useState ("");
    const [time, setTime] = useState ("");
    const [guests, setGuests] = useState ("");
    const [occasion, setOccasion] = useState ("");
    const [fname, setFname] = useState ("");
    const [lname, setLname] = useState ("");
    const [email, setEmail] = useState ("");



    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);

        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
        setFname("");
        setLname("");
        setEmail("");
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }




  return (
    <form onSubmit={handleSubmit}>
        <fieldset className='field-input'>
            <fieldset className='res-info'>
                <label htmlFor='res-date'>Choose date</label>
                <input
                    required
                    type='date'
                    id='res-date'
                    value={date}
                    onChange={(e) => handleChange(e.target.value)}/>

                <label htmlFor='res-time'>Choose time</label>
                <select
                    id='res-time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}>
                    {
                        props.availableTimes.availableTimes.map(times => {
                            return( <option key={times}>{times}</option> )
                        })
                    }
                </select>

                <label htmlFor='guests'>Number of guests</label>
                <input
                    required
                    type='number'
                    placeholder='1'
                    min='1'
                    max='10'
                    id='guests'
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}/>

                <label htmlFor='occasion'>Occasion</label>
                <select
                    id='occasion'
                    value={occasion}
                    key={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                </select>
            </fieldset>

            <fieldset className='cust-info'>
                <label htmlFor='fname'>First name</label>
                <input
                    required
                    type='text'
                    id='fname'
                    name='fname'
                    value={fname}
                    minLength={3}
                    onChange={(e) => setFname(e.target.value)} />

                <label htmlFor='lname'>Last Name</label>
                <input
                    required
                    type='text'
                    id='lname'
                    name='lname'
                    value={lname}
                    onChange={(e) => setLname(e.target.value)} />

                <label htmlFor='email'>Email</label>
                <input
                    required
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </fieldset>
        </fieldset>
        <fieldset>
            <button
                type='submit'
                value='Submit'
                className='submit'
                aria-label='On Click'
                disabled={!email || !time || !fname}>
                Reserve
            </button>
        </fieldset>
    </form>
  )
}

export default BookingForm