import React from 'react';
import Herosection from './herosection.jsx';
import HappyCustomer from './Happycostumer.jsx';
import Recipies from './Recipies.jsx';
import Video from './Video.jsx';
import Customer from './customer.jsx';
import Getintouch from './Getintouch.jsx';
import Footer from './footer.jsx';
const Home = () => {
  return (
    <div>
      <Herosection />
      <HappyCustomer />
     <Recipies/>
     <Video/>
     <Customer/>
     <Getintouch/>
     <Footer/>
    </div>
  );
}

export default Home;
