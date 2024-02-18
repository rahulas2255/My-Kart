import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero1.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>EVERYONE'S CHOICE</h2>
          <div>
            <div className='hero-hand-icon'>
                <p>stunning</p>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>

    </div>
  )
}

export default Hero