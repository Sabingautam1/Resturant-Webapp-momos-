import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Image/logo (3).png';
import './navbar.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={Logo} alt='logo' className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/allergy">Allergy Advice</Link></li>
        <li><Link to="/contact" className="contact-btn">Contact Us</Link></li> {/* Moved inside the <ul> */}
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.tiktok.com"><FaTiktok /></a>
      </div>
    </nav>
  );
}

export default Navbar;
