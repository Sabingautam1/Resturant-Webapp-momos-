import React from 'react'
import Navbar from '../component/NavBAr'

import serviceimg from "../Image/Group 8 (1).png"
import dineus from "../Image/Image (5).png"
import "./services.css"
import { IoPlayCircleOutline } from 'react-icons/io5'
import party from '../Image/party.png'
import vectorqr from "../Image/Vector.png"
import image6 from '../Image/Image (6).png'
import catering from '../Image/Chef.png'
import Footer from './footer'

function Service() {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
      <div className="service-header">
        <div className="ser-vice">
          <h1 className='color3'>Our Services</h1>
        </div>
        <div className='novatext'>
          <p className='color2'>KNOWING OUR CUSTOMERS NEEDS</p>
          <h2><span className='color'>We're more than just momos.</span><br />
              We're a full-service dining experience.</h2>       
        </div>  
      </div>
      <div>
        <img src={serviceimg} alt="" className="serviceimg" />
      </div>
      <div>
        <img src={dineus} alt="" className='dineus' />
      </div>
      <div className='dineheader'>
      <div>
        <h2>Dine With Us</h2>
        <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
      </div><br />
      <div>
        <button className='watchbtn' ><IoPlayCircleOutline/> Watch the video</button>
      </div>
      </div>



      <div style={{display:'flex', justifyContent:'space-around', paddingTop:'5rem'}}>
        <div>
          <div>
          <img src={party} alt="" />
          <h2>Private Party</h2>
          <p className='color2'>We have a private hall For party <br />We organize pool party eveey saturday <br />Can get private chef for special order.</p>
          </div>
          <div style={{display:'flex', gap:'1rem'}}>
            <div>
          <h2 className='color3'>Scan the QR code</h2>
            <p className='color2'>You can also check about the service</p>
            </div>
            <div>
            <img src={vectorqr} alt="" />
            </div>
          </div>
        </div>
        <div>
        <img src={image6} alt="" className='img6' />
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'space-around', paddingTop:'5rem'}}>
      <div>
        <img src={image6} alt="" className='img6' />
        </div>

        <div>
          <div>
          <img src={catering} alt="" />
          <h2>Categring</h2>
          <p className='color2'>We have a best catering services  <br /> WHere we can handle about 300 people on our spaceous halls <br />Price is accoridng to Menu.</p>
          </div>
          <div style={{display:'flex', gap:'1rem'}}>
            <div>
          <h2 className='color3'>Scan the QR code</h2>
            <p className='color2'>You can also check about the service</p>
            </div>
            <div>
            <img src={vectorqr} alt="" />
            </div>
          </div>
        </div>
        </div>
     


      <div className='query'>
        <h2>Got Any Queries?</h2>
        <p className='color2'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
        <button className='watchbtn'>Get in Touch</button>
      </div><br />
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Service