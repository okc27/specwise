// components/Footer.js
import React from 'react';
import './styles.css';
import Logo from './logo/logo.svg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-white py-4">
      <div className="container">
        {/* Logo */}
        <div className="text-center mb-3">
          <img src={Logo} alt="SpecWise Logo" className="footer-logo" />
        </div>

        {/* Navigation Links */}
        <ul className="list-inline text-center mb-3">
          <li className="list-inline-item mx-2">
            <a href="#home" className="footer-link">
              Home
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#contact" className="footer-link">
              Contact Us
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#about" className="footer-link">
              About Us
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#login" className="footer-link">
              Login
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#signup" className="footer-link">
              Signup
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-center mb-3">© 2024 SpecWise. All Rights Reserved.</p>

        {/* Social Media Icons */}
        <div className="text-center">
          <a href="#facebook" className="social-icon mx-2">
            <FaFacebookF />
          </a>
          <a href="#twitter" className="social-icon mx-2">
            <FaTwitter />
          </a>
          <a href="#linkedin" className="social-icon mx-2">
            <FaLinkedinIn />
          </a>
          <a href="#instagram" className="social-icon mx-2">
            <FaInstagram />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
