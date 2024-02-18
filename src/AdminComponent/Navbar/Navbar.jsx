import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <i classNameName="fa-brands fa-opencart"></i>
        <p>My-kart  <span>Admin Panel</span> </p>

        </div>
        <i classNameName="fa-solid fa-circle-chevron-down" style={{color: "#2a70ea",}} ></i>
    </div>
  )
}

export default Navbar