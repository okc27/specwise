import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import logo from './assets/logo.svg'; // Import the logo image
import signup from './assets/signup.png'; // Import the image

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(formData.first_name)) {
      newErrors.first_name = 'First name can only contain alphabets.';
    }

    if (!namePattern.test(formData.last_name)) {
      newErrors.last_name = 'Last name can only contain alphabets.';
    }

    if (!namePattern.test(formData.username)) {
      newErrors.username = 'Username can only contain alphabets.';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email is invalid.';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/check_username/${formData.username}/`);
      if (response.data.exists) {
        setErrors((prev) => ({ ...prev, username: 'Username already exists.' }));
        return;
      }
    } catch (error) {
      console.error('Error checking username', error);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/register/', formData);
      alert('Registration successful!');
      window.location.href = '/aboutus';
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <>
      <Navbar pageName="Register" />
      <div className="login-container py-5 text-center">
        <div className="reg_text container text-center">
          <div className="reg-card">
            <div className="login-header text-center">
              <img src={logo} alt="Specwise Logo" className="logo" />
              <h3 id="login-name">Create a new account</h3>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="first_name" className="form-label">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className={`form-input ${errors.first_name ? 'is-invalid' : ''}`}
                  placeholder="Enter your first name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
                {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="last_name" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className={`form-input ${errors.last_name ? 'is-invalid' : ''}`}
                  placeholder="Enter your last name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
                {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={`form-input ${errors.username ? 'is-invalid' : ''}`}
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-input ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className={`form-input ${errors.confirm_password ? 'is-invalid' : ''}`}
                  placeholder="Re-enter your password"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                  required
                />
                {errors.confirm_password && <div className="invalid-feedback">{errors.confirm_password}</div>}
              </div>

              <button type="submit" className="btn-primary" id="login-btn">Register Now</button>
              
              <div className="divider my-4 d-flex align-items-center">
                <hr className="flex-grow-1" />
                <span className="mx-3 ">OR</span>
                <hr className="flex-grow-1" />
              </div>

              <button
              type="button"
              onClick={() => window.location.href = '/login'}
              className="btn-secondary" id='reg-btn'
            >
              Login now
            </button>
            </form>

          </div>
          <div className="login-img">
            <img src={signup} alt="Specwise Logo" className="reg-img1" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
