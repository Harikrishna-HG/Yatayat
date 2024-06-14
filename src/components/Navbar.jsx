import React from 'react'
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <div>
     
<header className="header">
  <a href="/" className="logo">
    <i className="fas fa-swatchbook"></i>
    YataYat
  </a>
  <nav className="navbar">
    <a href="/" className="active">Home</a>
    <a href="#about">About</a>
    <a href="#services">services</a>
    <a href="#contact">Contact</a>
    <a href="#enquiry">Enquiry</a>
    <a href="#FAQs">FAQs</a>
  </nav>
  <div className="icons">
    <i className="fas fa-bars" id="menu-btn"></i>
    <i className="fab fa-facebook"></i>
    <i className="fab fa-youtube"></i>
    <i className="fab fa-instagram"></i>
  </div>
</header> 
    </div>
  )
}

export default Navbar


