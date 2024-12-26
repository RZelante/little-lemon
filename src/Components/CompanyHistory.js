import React from 'react'
import companyPicA from '../images/Mario and Adrian A.jpg'
import companyPicB from '../images/Mario and Adrian b.jpg'


function CompanyHistory() {
  return (
    <div className='history-container'>
        <div className='company-content-container'>
            <div className='company-info'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Mario and Adrian, two childhood friends with a shared love for food, always dreamed of opening a restaurant together. Mario, a talented chef with Mediterranean roots, and Adrian, a pastry expert inspired by family recipes, wanted to create a place that blended their culinary passions.</p>
                <p>In 2015, Little Lemon opened its doors, offering dishes like lemon-infused lamb chops, citrus tarts, and freshly baked bread. The restaurant quickly became a neighborhood favorite, known for its warm, inviting atmosphere and delicious, quality meals.</p>
            </div>
            <div className='company-images'>
                <img className='companyImg-B' src={companyPicB} alt="Picture of the owners" />
                <img className='companyImg-A' src={companyPicA} alt="Picture of the owners" />
            </div>
        </div>
    </div>
  )
}

export default CompanyHistory