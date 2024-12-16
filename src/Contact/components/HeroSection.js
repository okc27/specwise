import React from "react";
import hero from '../assets/pic1.jpg'; // Import the logo SVG
import "../styles.css"; // Add custom styles here

const HeroSection = () => {
  return (
    <section className="hero-section text-center bg-light">
      <div className="hero-container" id="contact-hero">
        <img
          src={hero} // Replace with the appropriate path
          alt="Contact Us"
          className="img-fluid mb-4"
        />
      </div>
    </section>
  );
};

export default HeroSection;
