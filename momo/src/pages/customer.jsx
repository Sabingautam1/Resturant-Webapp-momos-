import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import happywomen from "../Image/Happyman.png";
import "./customer.css";

const Customer = () => {
  return (
    <div className='px-4 pb-16 sm:px-100'>
      <div className='customer-container'>
        <div className='customer-content'>
          <h1>Why Customers <span className='text-ownColor'>Love Us</span> ?</h1>
          <p>One of the best On the town. Kada x ahai ktakti ho</p>
          <button className="flex items-center px-6 py-3 rounded-xl text-sm bg-teal-600 text-gray-50" type="button">
            Explore our Story <CiLocationArrow1 className="ml-2 text-xl" />
          </button>
        </div>
        <div className='customer-image'>
          <img src={happywomen} alt='man' />
        </div>
      </div>
    </div>
  );
};

export default Customer;
