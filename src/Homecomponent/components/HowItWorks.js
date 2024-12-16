// components/HowItWorks.js
import React from 'react';
import './styles.css';
import pic1 from '../How it works/pic1.png'; // Import the logo SVG
import pic2 from '../How it works/pic2.png'; // Import the logo SVG
import pic3 from '../How it works/pic3.png'; // Import the logo SVG


const HowItWorks = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">How SpecWise Works</h2>
      <p className="mb-4">Get personalized PC hardware recommendations in 3 easy steps.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <div className='card-cont'>
              <img src={pic1} alt="Input Needs" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Input Your Needs</h5>
                <p className="card-text">Describe the software and tasks you want to perform.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <div className='card-cont'>
              <img src={pic2} alt="AI Analysis" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">AI-Powered Analysis</h5>
                <p className="card-text">Our AI analyzes your input and determines the best hardware.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <div className='card-cont'>
              <img src={pic3} alt="Recommendations" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Receive Tailored Recommendations</h5>
                <p className="card-text">Get the best options for your PC hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
