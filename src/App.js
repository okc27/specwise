import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homecomponent/Home';
import Register from './Log-reg/Register';
import OwnerRegister from './Log-reg/OwnerRegister';

import Login from './Log-reg/Login';
import AboutUs from './About/AboutUs';
import ContactUs from './Contact/ContactUs'; 
import Recommendations from './Rec/Recommendations';
import LocalMarket from './LocalMarket/LocalMarket'; // Import the LocalMarket component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ownerRegister" element={<OwnerRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/localmarket" element={<LocalMarket />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
