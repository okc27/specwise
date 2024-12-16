import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import InputQuestion from './subcomponents/InputQuestion';
import Recommendation from './subcomponents/Recommendation';
import Details from './subcomponents/Details';
import Comparison from './subcomponents/Comparison';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Recommendations() {
  const [inputQuestion, setInputQuestion] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/recommendations/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: inputQuestion }),
      });

      const data = await response.json();
      setRecommendations(data);

      // Save input and output to the database
      if (inputCount === 0) {
        await fetch('http://localhost:8000/api/user-input-output/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            input_question: inputQuestion,
            output_recommendations: data,
          }),
        });
      }

      setInputCount(inputCount + 1);

      if (inputCount >= 1 && !localStorage.getItem('token')) {
        alert('You must log in to continue using the service.');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className='rec-main-text'>
          <h1>WELCOME TO SPECWISE</h1>
          <h2>LETS FIND HARDWARE FOR YOU</h2>
          <p>Find the perfect PC hardware based on your software and usage needs.</p>
        </div>
        <InputQuestion
          inputQuestion={inputQuestion}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        {loading && <p>Loading...</p>}
        <Recommendation recommendations={recommendations} />
        <Details /> {/* Placeholder */}
        <Comparison /> {/* Placeholder */}
      </div>
      <Footer />
    </>
  );
}

export default Recommendations;
