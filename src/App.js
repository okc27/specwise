// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homecomponent/Home';
import Register from './Log-reg/Register';
import Login from './Log-reg/Login';
import AboutUs from './About/AboutUs';
import ContactUs from './Contact/ContactUs'; // Import the ContactUs component
import Recommendations from './Rec/Recommendations';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/recommendations" element={<Recommendations />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
