import React from 'react'
import Navbar from '../component/NavBAr.jsx';
import "./About.css"
import about from "../Image/Group 8 (1).png"
import processimg from "../Image/Image (1).png"
import { IoPlayCircleOutline } from 'react-icons/io5'
import aboutphoto from "../Image/Rectangle 11.png"
import momo from "../Image/FryMomo.png"
import tasteabout from "../Image/Rectangle 11 (1).png"
import frymmo from "../Image/CMomo.png"
import tradimg from "../Image/Rectangle 11 (2).png"
import momoking from "../Image/SteamMomo.png"
import bgshadow from "../Image/Rectangle 14.png"
import quoteimg from "../Image/Rectangle 13.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import headchef from "../Image/Image (2).png"
import assistantchef from "../Image/Image (3).png"
import staffchef from "../Image/Image (4).png"
import Footer from "./footer.jsx";


function About() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className='headerabout' >
      <div className='about' >
        <h1 className='color3'>About Us</h1>
      </div>
      <div>
        <p className='color2'>WE PRIDE OURSELF ON</p>
        <h2><span className='color'>Our authentic momo recipes</span><br /> passed down through <br /> And New fusion can be found.</h2>
      </div>
      <div className='aboutimg'>
       <img src={about} alt="aboutimg" className='abtimg' />
      </div>
      </div>
      <div>
        <img src={processimg} alt="" className='processimg' />
      </div>
      <div className='procdes'>
      <h1>Process behind the making</h1>
      <p>See how we make momos that you like from only the best ingredients</p>
      <button className='watchbtn'><IoPlayCircleOutline/>Watch the Video</button>
      </div>
      <div className='aboutbody'>
      <h1>Our momos are <span className='color'>made <br /> with love </span></h1>
      <p>Momo, the delectable dumplings that have captured hearts worldwide,<br></br>
         hold a particularly special place in Nepalese cuisine.<br></br>
         integral part of Nepalese culinary culture, enjoyed across the country.<br>
         </br> IT is presented in various forms and flavors.
        .</p>
      </div>
      <div>
        <img src={aboutphoto} alt="" className='imgabout' />
      </div>
      <div>
        <img src={momo} alt="" className='momoinline' />
      </div>
      <div>
        <img src={tasteabout} alt=""  className="tasteabout"/>
      </div>
      <div>
        <img src={frymmo} alt="" className="frymmo" />
      </div>
      <div className="tasteheader">
        <h1>Taste the difference with <br /><span className='color'>our handcrafted momos</span></h1>
        <p>In Nepal, momos are typically made with a simple<br></br> dough of flour and water,
           filled with a savory<br></br> mixture of minced meat (commonly buffalo, chicken, or goat), vegetables, <br></br>
           and aromatic spices such as garlic, ginger, and cilantro.<br></br> They are then either steamed, fried,
            or occasionally <br></br>boiled, depending on personal preference and regional variations. 
          
            
             .</p>    
      </div>    
      <div className='tradheader'>
        <h1>Our momos are the <br /> perfect <span className='color'>blend of tradition</span> <br /> and <span className='color'>innovation</span></h1>
        <p>Beyond being a delicious snack or meal,<br></br>
           momos hold cultural significance in Nepalese festivals<br></br> and celebrations.
            They are a staple offering during <br></br>religious ceremonies,
             weddings, and other social gatherings,<br></br>
              symbolizing togetherness and abundance.</p>
      </div>
      <div>
        <img src={tradimg} alt="" className="tradimg" />
      </div>
      <div>
        <img src={momoking} alt="" className="momoking" />
      </div>
      <div>
        <img src={bgshadow} alt="" className= "bgshadow" />
      </div>
      <div className="quote">
        <p>" <br />Momo is not just about sustenance, it's about bringing <br /> people together and creating memories. At our <br /> restaurant, we strive to create a warm and inviting <br /> atmosphere where our guests can enjoy delicious <br /> momo, great company, and unforgettable experiences</p>
        <br />
        <h2>Marcus Schleifer</h2>
        <h4>CEO</h4>
        <IoArrowBackCircleOutline/>
        <IoArrowForwardCircleOutline/> 
      </div>
      <div>
        <img src={quoteimg} alt="" className="quoteimg" />
      </div>
      <div className='teamheading'>
        <h1>MEET THE <span className='color'>TEAM</span></h1>
        <p className='color3'><b>Our talented team members who delivers only the best results</b></p>
      </div>
      <div className='cardcontainer'>
      <div>
        <img src={headchef} alt="" className="headchef" />
        
      </div>
      <div>
        <img src={assistantchef} alt="" className="assistantchef" />
      </div>
      <div>
        <img src={staffchef} alt="" className="staffchef" />
      </div>
      </div>
      <div className='contentcenter'>
      <h2>Head Chef</h2>
      <h2>Assistant Chef</h2>
      <h2>Assistant Chef</h2>
      </div>
      <div className="numberarrbtn">
      <div className="numberarrow">
        <h3>01 / 05</h3>
      </div>
         <div className="arrowbtn">
           <IoArrowBackCircleOutline className="arrbtn"/>
           <IoArrowForwardCircleOutline className="arrbtn"/>
        </div> 
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About