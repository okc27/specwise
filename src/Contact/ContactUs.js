import React from "react";
import HeroSection from "./components/HeroSection.js";
import ContactPage from "./components/ContactPage";
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';


const ContactUs = () => {
  return (
    <div>
      <Navbar backgroundColor="black"  pageName="contactus"/>
      <HeroSection />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default ContactUs;
