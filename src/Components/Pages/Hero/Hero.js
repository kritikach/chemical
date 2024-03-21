import React from 'react'
import './Hero.css'

import { FaArrowRight } from "react-icons/fa";
function Hero() {
  return (
    <div className='__hero'>
        
        
        <div className='__herotext'>
            <h1>Embrace the Essence of Elegance</h1>
            
              <p>Experience the essence of luxury with our exquisite collection of perfumes. Indulge your senses in captivating fragrances that leave a lasting impression. Discover the perfect scent that reflects your unique style and personality. Elevate your fragrance game with Chemical Perfumes.
            </p>
          <button className='btn' >
           <a href='/table'>Explore More</a> 
            <FaArrowRight className='__leftarrow'/>
          </button>
          </div>
          
          



    </div>
  )
}

export default Hero;