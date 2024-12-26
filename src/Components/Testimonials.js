import React from 'react'
import reviews from '../reviews'


function Testimonials() {
  return (
    <div className='review-container'>
        <div className='cards-container'>
            <div>
                <h2>Testimonials</h2>
            </div>
            {/*Review Cards*/}
            <div className='review-cards'>
                {
                    reviews.map(review => <div key={review.id} className='review-items'>
                        <img src={review.image} alt="Review Profile Pic" />
                        <div className='review-content'>
                        <h4>{review.heading}</h4>
                        <h5 className='review-title'>{review.title}</h5>
                        <p className='review-description'>{review.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials