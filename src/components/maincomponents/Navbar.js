import React from 'react';
import './styles.css';
import Logo from './logo/logo.svg';

const Navbar = ({ backgroundColor, pageName }) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: backgroundColor || '#3498DB' }}
    >
      <div className="nav-container">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="SpecWise Logo"
            style={{ height: '40px', width: 'auto' }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${pageName === 'home' ? 'active' : ''}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${pageName === 'aboutus' ? 'active' : ''}`}
                href="/aboutus"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${pageName === 'contactus' ? 'active' : ''}`}
                href="/contactus"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn btn-primary mx-2 ${
                  pageName === 'login' ? 'disabled' : ''
                }`}
                id="main-b"
                href="/login"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn btn-secondary ${
                  pageName === 'Register' ? 'disabled' : ''
                }`}
                id="main-b"
                href="/Register"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
