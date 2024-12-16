// components/WhyChooseUs.js
import React from 'react';
import './styles.css';
import scrapingImg from '../why to use/pic1.png'; // Import the logo SVG
import aiImg from '../why to use/pic2.png'; // Import the logo SVG
import customizeImg from '../why to use/pic3.png'; // Import the logo SVG
import reportsImg from '../why to use/pic4.png'; // Import the logo SVG

const WhyChooseUs = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Why Choose SpecWise?</h2>
      <p className="mb-4">The smarter way to choose your PC hardware.</p>
      <div className="row">
        <div className="col-md-3">
          <div className='card border-0 shadow'>
            <div className='card-cont'>
              <img src={scrapingImg} alt="Real-time Data Scraping" className="why-choose-img mb-3" />
              <h5>Real-time Data Scraping</h5>
              <p>Stay updated with the latest hardware options.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className='card border-0 shadow'>
            <div className='card-cont'>
              <img src={aiImg} alt="AI-Driven Suggestions" className="why-choose-img mb-3" />
              <h5>AI-Driven Suggestions</h5>
              <p>Recommendations tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className='card border-0 shadow'>
            <div className='card-cont'>
              <img src={customizeImg} alt="Customizable Recommendations" className="why-choose-img mb-3" />
              <h5>Customizable Recommendations</h5>
              <p>Choose what suits you best.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className='card border-0 shadow'>
            <div className='card-cont'>
              <img src={reportsImg} alt="Detailed Comparison Reports" className="why-choose-img mb-3" />
              <h5>Detailed Comparison Reports</h5>
              <p>Make informed decisions with detailed reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
