import React from 'react'
import './Footer.css'

const Footer = ()=> {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <i className="fa-brands fa-opencart"></i>
        <p>My-kart</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-whatsapp"></i>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer