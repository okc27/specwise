import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpuImage from '../assets/cpu.png';
import gpuImage from '../assets/gpu.png';
import ramImage from '../assets/ram.png';
import ssdImage from '../assets/ssd.png';
import motherboardImage from '../assets/motherboard.png';
import powersupplyImage from '../assets/powersupply.png';
import Details from './Details';


function Recommendation({ inputQuestion }) {
  const [questionDetails, setQuestionDetails] = useState(null);
  const [hardwareRecommendation, setHardwareRecommendation] = useState(null);

  // State for managing the expanded note
  const [expandedNote, setExpandedNote] = useState(null);  // Always call hooks unconditionally

  // Image mapping for hardware components
  const imageMapping = {
    CPU: cpuImage,
    GPU: gpuImage,
    RAM: ramImage,
    SSD: ssdImage,
    Motherboard: motherboardImage,
    PowerSupply: powersupplyImage,
  };

  // Fetch question details from the API
  const fetchQuestionDetails = async (question) => {
    try {
      const response = await fetch('http://localhost:8000/api/question_details/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setQuestionDetails(data); // Store API response in state
    } catch (error) {
      console.error('Error fetching question details:', error);
    }
  };

  // Fetch hardware recommendations using question details
  const fetchHardwareRecommendation = async (details) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/hardware_recommendation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      setHardwareRecommendation(data.recommendations); // Store hardware recommendations in state
    } catch (error) {
      console.error('Error fetching hardware recommendation:', error);
    }
  };

  // Trigger API call when inputQuestion changes
  useEffect(() => {
    if (inputQuestion) {
      fetchQuestionDetails(inputQuestion);
    }
  }, [inputQuestion]);

  // Trigger hardware recommendation API when questionDetails is updated
  useEffect(() => {
    if (questionDetails) {
      fetchHardwareRecommendation(questionDetails);
    }
  }, [questionDetails]);

  // Display loading message if data is not available
  if (!questionDetails || !hardwareRecommendation) {
    return <div>Loading...</div>;
  }

  // Function to truncate the note and handle "See More" functionality
  const truncateNote = (note) => {
    if (!note) return '';
    const limit = 50;
    return note.length > limit ? note.slice(0, limit) + '...' : note;
  };

  const toggleNoteExpansion = (index) => {
    setExpandedNote(expandedNote === index ? null : index);
  };

  // Render hardware recommendation details grouped by component
  const renderHardwareRecommendationSection = (hardwareData, requirementType) => {
    return Object.entries(hardwareData).map(([key, { option1, option2, note }], index) => (
      <div key={index} className="mb-4">
        <div className="d-flex align-items-center mb-3">
          <img src={imageMapping[key]} alt={key} className="img-fluid" style={{ width: '40px', marginRight: '10px' }} />
          <h5 className="text-primary">{key}</h5>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{requirementType}</td>
              <td>{option1}</td>
              <td>{option2}</td>
              <td>
                <div>
                  {expandedNote === index ? (
                    <p>{note}</p>
                  ) : (
                    <p>{truncateNote(note)}</p>
                  )}
                  {note && note.length > 50 && (
                    <button
                      className="btn btn-link p-0"
                      onClick={() => toggleNoteExpansion(index)}
                    >
                      {expandedNote === index ? 'See Less' : 'See More'}
                    </button>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center text-success">Question Details</h3>

      {/* Display the input question */}
      <div className="alert alert-info">
        <strong>Input Question:</strong> {questionDetails.question}
      </div>
      {/* Render question details */}
      <div className="row">
        {Object.entries(questionDetails.recommendation_details || {}).map(([key, value], index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{key}</h5>
                <p className="card-text">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Minimum hardware recommendations */}
      <h4 className="text-center text-primary">Minimum Hardware Requirements</h4>
      <div>
        {renderHardwareRecommendationSection(hardwareRecommendation.minimum, 'Minimum')}
      </div>

      {/* Render Best Suitable hardware recommendations */}
      <h4 className="text-center text-primary">Best Suitable Hardware Requirements</h4>
      <div>
        {renderHardwareRecommendationSection(hardwareRecommendation.suitable, 'Best Suitable')}
      </div>
    </div>
    
  );
}

export default Recommendation;
