// HappyCustomer.jsx

import React from 'react';
import happyman from"../Image/Group 3.png";
import "./home.css";

const HappyCustomer = () => {
  return (
    <div className="happy-customer-container">
      <div className="happy-customer-image">
        <img src={happyman} alt="happy man" />
      </div>
      <div className="happy-customer-text">
        <h1 className="happy-customer-title">200+ <span className="happy-customer-highlight">Happy Customers</span></h1>
        <p className="happy-customer-subtitle">What our customers say about us</p>
        <p className="happy-customer-review">"Only the best momo you can find in the market. Different varieties of momo to choose from. Will be visiting again soon."</p>
        <h1 className="happy-customer-name">WIN bhai</h1>
        <div className="happy-customer-arrows">
          <button>more</button>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomer;
