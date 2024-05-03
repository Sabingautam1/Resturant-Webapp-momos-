import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Logo from "../Image/Logo.png";
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      {/* Section for "Momos" with logo and paragraph */}
      <div className='footer-section'>
        <div className='flex items-center mb-4'>
          <img className='w-10 h-10 mr-2' src={Logo} alt='momo'></img>
        </div>
        <p className='text-sm text-gray-600'>
          One of the best in town .let us give a change to serve you.</p>
      </div>

      {/* Section for "Menu" with list of links */}
      <div className='footer-section'>
        <h1 className='text-xl font-semibold'>Menu</h1>
        <ul className='list-disc ml-4'>
          <li>About Us</li>
          <li>Our Menu</li>
          <li>Our Services</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Section for "Legals" with list of legal items */}
      <div className='footer-section'>
        <h1 className='text-xl font-semibold'>Legals</h1>
        <ul className='list-disc ml-4'>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Support</li>
        </ul>
      </div>

      {/* Section for "Follow Us" with social media icons */}
      <div className='footer-section'>
        <h1 className='text-xl font-semibold'>Follow Us</h1>
        <div className='flex items-center'>
          <Link to=''>
            <FaFacebookF className='w-8 h-8 mr-2 text-blue-600' />
          </Link>
          <Link to=''>
            <FaTiktok className='w-8 h-8 mr-2 text-pink-600' />
          </Link>
          <Link to=''>
            <FaInstagram className='w-8 h-8 mr-2 text-pink-600' />
          </Link>
          <Link to=''>
            <IoLogoYoutube className='w-8 h-8 mr-2 text-red-600' />
          </Link>
          <Link to=''>
            <FaLinkedin className='w-8 h-8 mr-2 text-blue-600' />
          </Link>
        </div>
      </div>

      {/* Divider line */}
      <div className='w-full h-[1px] my-4 bg-gray-300'></div>

      {/* Footer copyright */}
      <div className='footer-copyright'>
        <p className='text-center text-sm text-gray-600'>
          Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
