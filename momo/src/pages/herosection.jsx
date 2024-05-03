// Home.jsx

import React, { Component } from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import "./hero.css"
import Banner from "../Image/banner1.png";
import Frame from "../Image/Frame.png";
//import HappyCustomer from './Happycostumer';

class herosection extends Component {
  render() {
    return (
      <div className='hero-section'>
        <div className='content-container'>
          <img className='banner-image' src={Banner} alt='banner'></img>
          <div className='hero-content'>
            <div>
              <p className='resturant'>Restaurant</p>
              <div className='flex items-center'>
                <h1  className='title'>The </h1>
              </div>
              <h1 className='title-big'>Momo <span></span></h1>
              <p className='description'>more than <span className='variants'>20 Varieties</span> of momo available for you</p>
              <div className="explore-button">
                <button className="button" type="button">
                  Explore more food <CiLocationArrow1 className="icon" />
                </button>
              </div>
            </div>
          </div>
          <img className='frame-image' src={Frame} alt='frame'></img>
        </div>
      </div>
    );
    
  }
}

export default herosection;
