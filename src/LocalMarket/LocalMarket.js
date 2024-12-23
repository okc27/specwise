import React, { useState } from 'react';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LocalMarket.css'; // Import the custom CSS file

function LocalMarket() {
  const [formData, setFormData] = useState({
    hardwareName: '',
    shopId: 4, // Default shop ID
    hardwareType: 'CPU', // Default selection
    price: '',
    productLinkOrAddress: '',
    useShopAddress: false, // Determines if the user selects a predefined shop address
  });

  const hardwareTypes = ['CPU', 'GPU', 'SSD', 'RAM', 'HDD', 'Motherboard', 'Powersupply'];
  const shopAddresses = [
    '123 Main Street, City Center',
    '456 Market Road, Downtown',
    '789 Industrial Area, Suburb',
  ]; // Example shop addresses

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleShopAddressChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      productLinkOrAddress: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Hardware data submitted successfully!');
    // Further logic to send the formData to the backend can be added here
  };

  return (
    <>
      <Navbar backgroundColor="#007bff" pageName="aboutus" />
      <div className="local-market-container">
        <h3 className="local-market-heading">Local Market - Add Hardware Data</h3>
        <form className="local-market-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hardwareName">Hardware Name</label>
            <input
              type="text"
              className="form-control"
              id="hardwareName"
              name="hardwareName"
              value={formData.hardwareName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hardwareType">Hardware Type</label>
            <select
              className="form-select"
              id="hardwareType"
              name="hardwareType"
              value={formData.hardwareType}
              onChange={handleInputChange}
              required
            >
              {hardwareTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (in USD)</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="useShopAddress"
                checked={formData.useShopAddress}
                onChange={handleInputChange}
              />{' '}
              Use Shop Address
            </label>
          </div>

          {formData.useShopAddress ? (
            <div className="form-group">
              <label htmlFor="shopAddress">Select Shop Address</label>
              <select
                className="form-select"
                id="shopAddress"
                name="productLinkOrAddress"
                value={formData.productLinkOrAddress}
                onChange={handleShopAddressChange}
                required
              >
                <option value="">-- Select a Shop Address --</option>
                {shopAddresses.map((address, index) => (
                  <option key={index} value={address}>
                    {address}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="productLinkOrAddress">Product Link or Shop Address</label>
              <textarea
                className="form-control"
                id="productLinkOrAddress"
                name="productLinkOrAddress"
                rows="3"
                value={formData.productLinkOrAddress}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          )}

          <button type="submit" className="btn btn-custom-submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LocalMarket;
