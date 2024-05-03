import React from 'react'
import Navbar from '../component/NavBAr';
import "./AllergyAdvice.css"
import serviceimg from "../Image/Group 8 (1).png"
import { Card } from 'react-bootstrap'
import scan from "../Image/Scan.png"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Footer from './footer'
import masala from "../Image/masala.png"
import oval1 from "../Image/Vector (1).png"
import oval2 from "../Image/Vector (2).png"

function Advice() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='mainallergyheader'>
        <div className='header'>
          <h1 className='color3'>Allergy Advices</h1>
        </div>
        <div>
          <p className='color2'>AT OUR RESTAURANT</p>
        </div>
        <div>
          <h2>We use only the freshest and highest <br /> quality ingredients in all our dishes, <br />
          <span className='color'>and offer transparency in our ingredient <br /> labeling.</span></h2>
        </div>
      </div>
      <div>
        <img src={serviceimg} alt="" className='adviceimg' />
      </div>
      <div className='momoheader'>
        <h2 className='inged'><span className='color'>Ingredient's</span> Used</h2>
      </div>
      <div>
        <img src={oval1} alt="" className='oval1' />
      </div>
      <div>
        <Card>
          <Card.Body className='carddesign'>
            <h3>For the Dough:</h3>
            <ul style={{listStyle:'none'}}>
              <li>120 gms refined flour</li><br />
              <li>1/4 tsp baking powder</li><br />
              <li>1/2 tsp salt water (for kneading)</li><br />
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Body className='carddesign'>
            <h3>For the Chicken Filling:</h3>
            <ul style={{listStyle:'none'}}>
              <li>1 cup chicken (minced)</li><br />
              <li>1/4 tsp black pepper powder</li><br />
              <li>1 tbsp oil</li><br />
              <li>1/2 tsp garlic paste</li><br />
              <li>1/2 tsp soya sauce</li><br />
              <li>Salt</li><br />
              <li>1/4 tsp vinegar</li><br />
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div>
        <img src={masala} alt="" className='masala' />
      </div>
      <div>
        <Card>
          <Card.Body className='carddesign'>
            <h3>For the Vegetarian Filling:</h3>
            <ul style={{listStyle:'none'}}>
              <li>1 cup cabbage and carrots, grated</li><br />
              <li>2 tbsp onions , finely chopped</li><br />
              <li>1/2 tsp garlic, finely chopped</li><br />
              <li>1 tbsp oil</li><br />
              <li>1/4 tsp vinegar</li><br />
              <li>1/2 tsp soya sauce</li><br />
              <li>to taste salt</li><br />
              <li>to taste pepper</li><br />
              <li>1 tbsp cornflour</li><br />
            </ul>    
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Body className='carddesign'>
            <h3>For Chilli Sauce:</h3>
            <ul style={{listStyle:'none'}}>
              <li>25 gram garlic, peeled</li><br />
              <li>6 gms whole red chillies</li><br />
              <li>3 tbsp vinegar</li><br />
              <li>3 tbsp vinegar</li><br />
              <li>1 tbsp oil</li><br />
              <li>to taste salt</li><br />
              <li>to taste salt</li><br />
              <li>to taste sugar</li><br />  
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div>
        <img src={oval2} alt="" className='oval2' />
      </div> <br /><br /><br />
      <div className='momoheader'>
        <h2 className='inged'><span className='color'>Allergy</span> Advice</h2>
      </div>
      <div className='loremallergy'>
<p>Allergy Advice for Momos:

Our momos are prepared in a kitchen that handles various allergens, <br></br>
including but not limited to wheat, soy, nuts, dairy, and seafood. <br></br>
While we take precautions to prevent cross-contamination,<br></br>
 we cannot guarantee that our momos are free from traces of these allergens.<br></br>

If you have any allergies or dietary restrictions,<br>
</br> please inform our staff before placing your order. <br>
</br>We will do our best to accommodate your needs and provide<br>
</br> you with suitable options.

Please note that our ingredients and recipes may change from time to time,<br>
</br> so we recommend checking with our staff if you have any specific concerns about allergens.
</p>
      </div>
      <div className='color4'>
        <div className='headerscan'>
          <h2 className='color3'>Scan the QR code</h2>
          <p>You can also check the allergy advices using your phone as well</p>
        </div>
        <div className='scanqr'>
          <img src={scan} alt="" className='qrcode' />
          <h2><span className='color'>SCAN</span> ME! <MdOutlinePhoneAndroid className='androidbtn'/></h2>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Advice;
