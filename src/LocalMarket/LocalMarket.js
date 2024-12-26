import React, { useState } from 'react';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LocalMarket.css'; // Import the custom CSS file

function LocalMarket() {
  const [formData, setFormData] = useState({
    hardwareName: '',
    shopId: 9, // Default shop ID set to 7
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { hardwareName, shopId, hardwareType, price, productLinkOrAddress, useShopAddress } = formData;
  
    // Validate the required fields
    if (!hardwareName || !price || !productLinkOrAddress) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Convert price to a number
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      alert("Please enter a valid price.");
      return;
    }
  
    // Define the payload object for the API
    const payload = {
      name: hardwareName,
      store_id: shopId,
      category: hardwareType,
      price: priceNumber, // Ensure price is a number
      link: productLinkOrAddress, // Ensure the link is a valid string or URL
      rating: null,  // Optional field, include if needed
    };
  
    console.log('Payload:', payload);  // Log the payload to check the structure
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/hardware-data/add-product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Error Details:', errorDetails);  // Log any detailed error message from the API response
        throw new Error('Failed to add product');
      }
  
      const result = await response.json();
      console.log('Product added successfully:', result);
      alert('Hardware data submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
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
