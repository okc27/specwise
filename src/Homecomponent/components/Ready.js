// components/Ready.js
import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import illustration from '../ready to build pc/pic.svg'; // Import the image

const Ready = () => {

  const navigate = useNavigate();

  const handleGoToRecommendations = () => {
    navigate('/recommendations'); // Navigate to the recommendations page
  };
  
  return (
    <div className="ready-section container py-5 text-center">
      <div className="row w-100 mx-0">
        <div className="col-md-6 text-center text-md-start">
          <img
            src={illustration}
            alt="Illustration of Building a Perfect PC"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h2 className="ready-title">Ready to Build Your Perfect PC?</h2>
            <p className="ready-description">
              Get started with tailored hardware recommendations that match your
              needs.
            </p>
                    {/* Button to Recommendations */}
              <a
                href="#get-started"
                className="btn btn-primary btn-lg"
                onClick={handleGoToRecommendations}
              >
                Get Started
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Ready;
