import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import logo from './assets/logo.svg';
import signup from './assets/signup.png';

const OwnerRegister = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '', // Renamed to phone_number
    username: '',
    password: '',
    confirm_password: '',
    shop: {
      shop_name: '',
      country: '',
      city: '',
      website_link: '',
    },
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [key, subKey] = name.split('.');

    if (subKey) {
      setFormData((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          [subKey]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z]+$/;
    const mobilePattern = /^[0-9]{10}$/; // Mobile number validation (10 digits)

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

    if (!formData.shop.shop_name.trim()) {
      newErrors.shop_name = 'Shop name is required.';
    }

    if (!formData.shop.country.trim()) {
      newErrors.country = 'Country is required.';
    }

    if (!formData.shop.city.trim()) {
      newErrors.city = 'City is required.';
    }

    if (!mobilePattern.test(formData.phone_number)) {
      newErrors.phone_number = 'Mobile number must be 10 digits.';
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
      // Submit the form in the required API format
      const apiData = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone_number,
        username: formData.username,
        password: formData.password,
        shop: {
          shop_name: formData.shop.shop_name,
          country: formData.shop.country,
          city: formData.shop.city,
          website_link: formData.shop.website_link,
        },
      };

      await axios.post('http://127.0.0.1:8000/api/register-shop-owner/', apiData);
      alert('Registration successful!');
      window.location.href = '/aboutus';
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <>
      <Navbar pageName="Owner Register" />
      <div className="login-container py-5 text-center">
        <div className="reg_text container text-center">
          <div className="reg-card">
            <div className="login-header text-center">
              <img src={logo} alt="Specwise Logo" className="logo" />
              <h3 id="login-name">Register as Shop Owner</h3>
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

              <div className="form-group">
                <label htmlFor="shop.shop_name" className="form-label">Shop Name</label>
                <input
                  type="text"
                  id="shop.shop_name"
                  name="shop.shop_name"
                  className={`form-input ${errors.shop_name ? 'is-invalid' : ''}`}
                  placeholder="Enter your shop name"
                  value={formData.shop.shop_name}
                  onChange={handleInputChange}
                  required
                />
                {errors.shop_name && <div className="invalid-feedback">{errors.shop_name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="shop.country" className="form-label">Country</label>
                <input
                  type="text"
                  id="shop.country"
                  name="shop.country"
                  className={`form-input ${errors.country ? 'is-invalid' : ''}`}
                  placeholder="Enter your country"
                  value={formData.shop.country}
                  onChange={handleInputChange}
                  required
                />
                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="shop.city" className="form-label">City</label>
                <input
                  type="text"
                  id="shop.city"
                  name="shop.city"
                  className={`form-input ${errors.city ? 'is-invalid' : ''}`}
                  placeholder="Enter your city"
                  value={formData.shop.city}
                  onChange={handleInputChange}
                  required
                />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="phone_number" className="form-label">Mobile Number</label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className={`form-input ${errors.phone_number ? 'is-invalid' : ''}`}
                  placeholder="Enter your mobile number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="shop.website_link" className="form-label">Shop Website (optional)</label>
                <input
                  type="url"
                  id="shop.website_link"
                  name="shop.website_link"
                  className="form-input"
                  placeholder="Enter your shop website (if any)"
                  value={formData.shop.website_link}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="btn-primary" id="login-btn">Register Now</button>
            </form>
          </div>
          <div className="login-img">
            <img src={signup} alt="Signup Illustration" className="reg-img1" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OwnerRegister;
