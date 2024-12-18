import React from "react";
import hero_pic from '../assets/pic1.svg'; // Import the logo SVG

const HeroSection = () => {
  return (
    <section className="hero-section text-center text-white">
      <div className="hero-container">
        <div className="text-con" id="txt">
          <div className="txt">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="lead">
            Learn more about Specwise and our mission to help you choose the
            perfect PC hardware for your needs.
          </p>
        </div>
        </div>
        <div className="img-con">
          <img
            id="img-f"
            src={hero_pic} // Replace with actual path
            alt="About Us Illustration"
            className="img-fluid mt-4"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
