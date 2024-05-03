import React from 'react'
import Navbar from '../component/NavBAr';
import "./contact.css"
import { Card, CardBody } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import map1 from "../Image/Map (1).png";
import Footer from './footer';

function Contact() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className='contactheader'>
      <h2 className='color3'>Our Contact</h2>
    </div>
    <div className='contactdesc'>
    <p className='color2'>GET IN TOUCH</p>
    <h2><span className='color'>Our Friendly Team</span> would love to hear from you</h2>
    </div>
    <div className='cardflexer'>
    <div className='card1'>
      <Card>
        <CardBody>
            <h4><FaLocationDot className='color'/> LOCATION</h4>
            <p>Kathunjaye <br />Bhaktapur, Bagmati, Nepal</p>
        </CardBody>
      </Card>
    </div>
    <div className='card1'>
      <Card>
        <CardBody>
            <h4><FaPhoneVolume className='color'/> PHONE</h4>
            <p><span className='color3'>Mobile:</span> (+977) 9999999999 <br />(+977) 989999999</p>
            <p><span className='color3'>Tel:</span> 01-4786969692</p>       
        </CardBody>
      </Card>
    </div>
    <div className='card1'>
      <Card>
        <CardBody>
            <h4><MdOutlineAccessTime className='color'/> SERVICE TIME</h4>
            <p><span className='color3'>MON - FRI</span> 8 am - 8 pm</p>
            <p><span className='color3'>SAT - SUN</span> Closed</p>

        </CardBody>
      </Card>
    </div>
    </div>
    <div className='contactformheader'>
    <div className='mapimg'>
      <img src={map1} alt="" />
    </div>
    <div>
      <h2>Contact <span className='color'>Us</span></h2>
      <p className='color2'>If you have any queries, send us a message. Our Friendly team would <br /> love to hear from you</p>
   <div className='contact form'>
   <label htmlFor="">First Name</label><br></br>
   <input type="text" /><br></br>
    <label htmlFor="">Last Name</label><br />
    
    <input type="text" /><br /><br />
    <label htmlFor="">What can we do for you</label><br />
    <select name="" id="">
      <option value="">Choose</option>
    </select><br /><br />
    <label htmlFor="">Email</label><br />
    <input type="email" /><br /><br />
    <label htmlFor="">Phone Number</label><br />
    
    <select name="" id="">
      <option value="">+977</option>
      
    </select>
    <input type="number" /> <br /> <br />
    <label htmlFor="">Message</label><br />
    <input type="text" /> <br /> <br />
   </div>
   <div>
    <button className='watchbtn'>Send Message</button>
   </div>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Contact;