import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 
import logo from "./assets/logo.svg"; // Import the image
import login from "./assets/login.png"; // Import the image

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', credentials);
      alert(response.data.message);

      if (response.status === 200) {
        window.location.href = '/recommendations';
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('Invalid credentials');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <Navbar pageName="login" />
      <div className="login-container py-5 text-center">
        <div className='login_text container text-center'>
        <div className="login-card">
          <div className="login-header text-center">
            <img src={logo} alt="Specwise Logo" className="logo" />
            <h3 id='login-name'>Login into your account</h3>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="username"
                id="username"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            <div className="text-right mt-3">
            <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
          </div>
            <button type="submit" className="btn-primary " id='login-btn'>Login now</button>
        
            <div className="divider my-4 d-flex align-items-center">
              <hr className="flex-grow-1" />
              <span className="mx-3 ">OR</span>
              <hr className="flex-grow-1" />
            </div>

            <button
              type="button"
              onClick={() => window.location.href = '/register'}
              className="btn-secondary" id='reg-btn'
            >
              Signup now
            </button>
          </form>


        </div>
        <div className="login-img">
            <img src={login} alt="Specwise Logo" className="login-img1" />
          </div>
      </div>
        </div>

      <Footer />
    </>
  );
};

export default Login;
