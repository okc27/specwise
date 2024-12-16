import React from 'react';
import '../styles.css'; // Ensure to include the styles for the updated design

function InputQuestion({ inputQuestion, handleInputChange, handleSubmit }) {
  return (
    <div className="input-question-container">
      <div className="card" id='rec-card'>
        <div className="card-header text-center">
          <h2 className="title">Tell Us Your Requirements</h2>
          <p className="subtitle">Please provide the details of the software and tasks you’ll be performing, and we’ll recommend the best hardware configuration.</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="input-question-form">
            <div className="form-group">
              <label htmlFor="question" className="form-label" id='rec-form'>Please enter your Question</label>
              <textarea
                id="question"
                className="form-textarea"
                value={inputQuestion}
                onChange={handleInputChange}
                placeholder="I want to run Adobe Photoshop 2023, Autodesk AutoCAD 2024, and Visual Studio 2022 and also do image processing for large-scale projects. I’ll be working with high-resolution graphics and need fast rendering speeds. What PC hardware should I use?"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-50" id='rec-btn'>Get Recommendations</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputQuestion;
