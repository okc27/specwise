import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import InputQuestion from './subcomponents/InputQuestion';
import Recommendation from './subcomponents/Recommendation';
import Details from './subcomponents/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Recommendations() {
  const [inputQuestion, setInputQuestion] = useState('');
  const [tempQuestion, setTempQuestion] = useState(''); // Temporary state for the textarea
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // New state to manage hardware details display
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setTempQuestion(e.target.value); // Update only the temporary state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShowRecommendation(false);
    setShowDetails(false); // Reset details when submitting new question

    setInputQuestion(tempQuestion); // Update the main state on submit

    try {
      const classifyResponse = await fetch('http://localhost:8000/api/classify-query/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: tempQuestion }), // Send the temporary question
      });

      const classifyData = await classifyResponse.json();

      if (classifyData.is_hardware_related === 'yes') {
        setShowRecommendation(true);
        setShowDetails(true); // Show hardware details when recommendations are displayed
        console.log('Query is related to hardware:', tempQuestion);
      } else {
        setError('This query is not related to hardware. Please ask about hardware recommendations.');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="rec-main-text">
          <h1>WELCOME TO SPECWISE</h1>
          <h2>LET'S FIND HARDWARE FOR YOU</h2>
          <p>Find the perfect PC hardware based on your software and usage needs.</p>
        </div>
        <InputQuestion
          inputQuestion={tempQuestion} // Bind the temporary state
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        {loading && <p>Loading...</p>}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {showRecommendation && <Recommendation inputQuestion={inputQuestion} />}
        
        {/* Conditionally render Details after the recommendations */}
        {showDetails && <Details />}
      </div>

      <Footer />
    </>
  );
}

export default Recommendations;
