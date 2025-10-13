import React from 'react'
import './newsletter.css'
function NewLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive  Offers On Your Email </h1>
        <p>Subscribe to out newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter
