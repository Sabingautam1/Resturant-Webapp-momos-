import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaClock, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./getintouch.css";

const Getintouch = () => {
  return (
    <div className="container">
      <div className="content-container py-5 px-8 lg:w-8/12">
        <div>
          <div className="pt-10 pb-10">
            <div className="px-4 sm:px-100">
              <div>
                <h1 className="text-center text-4xl text-cyan-900 font-semibold mb-2">Get <span className="text-ownColor">In Touch</span></h1>
                <p className="text-center text-2xl text-cyan-800 mb-9 font-semibold">Our Friendly team would love to hear from you</p>
              </div>
              <div className="border border-gray-300 rounded-xl shadow-2xl shadow-gray-300 p-6 lg:flex">
                <div className="form-container rounded-xl shadow-2xl shadow-gray-300 py-5 px-8 bg-formBackCol text-white lg:w-4/12">
                  <div className="mb-3">
                    <div className="flex items-center">
                      <IoLocationSharp className="text-lg" />
                      <h1 className="ml-2 font-semibold">Address</h1>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="italic w-72">New Baneshwor, Kathmandu, Bagmati, Nepal,</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-md" />
                      <h1 className="ml-2 font-semibold">Contacts</h1>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex">
                      <div>
                        <h1>Mobile no</h1>
                        <p>980<span>999999</span></p>
                        <p>9841<span>9999997</span></p>
                      </div>
                      <div className="ml-10">
                        <h1>Landline</h1>
                        <p>01-47999972</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div>
                      <div className="flex items-center">
                        <FaClock className="text-lg" />
                        <h1 className="ml-2 font-semibold">Service Time</h1>
                      </div>
                    </div>
                  </div>

                  <div className="mb-16">
                    <div className="flex">
                      <div>
                        <h1>Mon-Fri</h1>
                        <p>10 am - 8 pm</p>
                      </div>
                      <div className="ml-10">
                        <h1>Sat-Sun</h1>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p>Get in touch in social networks</p>
                  </div>
                  <div className="mt-5 mb-5">
                    <div>
                      <div className="flex items-center">
                        <div className="mycontainer">
                          <Link to="" className="icon">
                            <FaFacebookF className="samei" />
                          </Link>

                          <Link to="" className="icon">
                            <FaTiktok className="samei" />
                          </Link>

                          <Link to="" className="icon">
                            <FaInstagram className="samei" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container py-5 px-8 lg:w-8/12">
        <div>
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md mb-2" htmlFor="first-name">First Name</label>
                <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md mb-2" htmlFor="last-name">Last Name</label>
                <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" placeholder="" />
              </div>
            </div>
            {/* Email */}
<div className="mb-6">
  <div className="w-full mb-4 md:mb-0">
    <label className="block capitalize tracking-wide text-gray-700 text-md mb-2" htmlFor="email">Email</label>
    <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="" />
  </div>
</div>

{/* What can we do for you? */}
<div className="mb-6">
  <div className="w-full mb-3 md:mb-0">
    <label className="block tracking-wide text-gray-700 text-md mb-2" htmlFor="service-option">What can we do for you</label>
    <div className="relative">
      <select className="block appearance-none w-full bg-gray-50 border border-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="service-option">
        <option></option>
        <option>sfsdfs</option>
        <option>dfss</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Phone Number */}
<div className="mb-6">
  <div className="w-full mb-4 md:mb-0">
    <label className="block capitalize tracking-wide text-gray-700 text-md mb-2" htmlFor="phone">Phone Number</label>
    <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="Number" placeholder="" />
  </div>
</div>

{/* Message */}
<div className="mb-6">
  <div className="w-full mb-4 md:mb-0">
    <label className="block capitalize tracking-wide text-gray-700 text-md mb-2" htmlFor="message">Message</label>
    <textarea className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" type="text" placeholder="Write your thoughts..." rows={6} />
  </div>
</div>

{/* Button */}
<div>
  <div>
    <button className="border-2 px-5 py-4 text-md rounded-xl text-white capitalize linClass" type="button">Send Message</button>
  </div>
</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
