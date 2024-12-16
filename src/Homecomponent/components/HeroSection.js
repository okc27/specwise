// components/HeroSection.js
import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import hero from '../hero/hero.svg'; // Import the logo SVG

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGoToRecommendations = () => {
    navigate('/recommendations'); // Navigate to the recommendations page
  };

  return (
    <div className="home-hero text-white py-2">
      {/* Text Container */}
      <div className="text-container">
        <h1 className="display-4">Find Your Perfect PC Hardware</h1>
        <p className="lead">
          Get tailored PC hardware recommendations based on your specific tasks and software needs.
        </p>

        {/* Button to Recommendations */}
        <a
          href="#get-started"
          className="btn btn-primary btn-lg"
          onClick={handleGoToRecommendations}
        >
          Get Your Recommendations
        </a>

        {/* Key Benefits */}
        <div className="hero-points mt-4">
          <p>✔️ Personalized recommendations based on your tasks</p>
          <p>✔️ Real-time hardware data from top e-commerce platforms</p>
          <p>✔️ Optimize performance and cost with AI-driven suggestions</p>
        </div>
      </div>

      {/* Image Container */}
      <div className="image-container">
        <img src={hero} alt="PC Hardware" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
