import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/NavBAr.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Offers from './pages/offers.jsx';
import Menu from './pages/Menu.jsx';
import Services from './pages/Services.jsx';
import AllergyAdvice from './pages/AllergyAdvice.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergy" element={<AllergyAdvice />} />
      </Routes>
    </Router>
  );
}

export default App;
