// components/Ready.js
import React from 'react';
import './styles.css';
import illustration from '../ready to build pc/pic.svg'; // Import the image

const Ready = () => {
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
            <button className="btn btn-primary ready-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
