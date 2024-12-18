import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpuImage from '../assets/cpu.png'; // Example import for CPU
import gpuImage from '../assets/gpu.png'; // Add corresponding paths
import ramImage from '../assets/ram.png';
import ssdImage from '../assets/ssd.png';
import motherboardImage from '../assets/motherboard.png';
import powersupplyImage from '../assets/powersupply.png';

function Recommendation() {
  const dummyDictionary = {
    'Software Name': 'AI Model Training Software (General)',
    'Task to Perform': 'AI Model Training',
    'Hardware Mentioned': 'CPU, RAM, Motherboard',
    'Special Task': 'AI Model Training (High-performance hardware required)',
  };

  const minimumRecommended = {
    CPU: {
      option1: 'AMD Ryzen 9 5950X',
      option2: 'Intel Core i9-10900K',
      note: 'These CPUs are both high-performance options that can handle multiple virtual machines efficiently. The AMD Ryzen 9 5950X has 16 cores and 32 threads, while the Intel Core i9-10900K has 10 cores and 20 threads.',
    },
    RAM: {
      option1: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 DRAM 3200MHz',
      option2: 'G.Skill Ripjaws V Series 32GB (2 x 16GB) DDR4 DRAM 3600MHz',
      note: 'The 16GB and 32GB capacities provide ample memory for running multiple virtual machines efficiently.',
    },
    Motherboard: {
      option1: 'ASUS ROG Strix X570-E Gaming',
      option2: 'MSI MEG X570 ACE',
      note: 'Both motherboards are high-end and support robust virtualization capabilities.',
    },
  };

  const maximumRecommended = {
    CPU: {
      option1: 'Intel Core i7-9700K',
      option2: 'AMD Ryzen 7 3700X',
      note: 'These CPUs are recommended for high performance and multi-threading capabilities.',
    },
    RAM: {
      option1: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 DRAM 3200MHz',
      option2: 'G.Skill Ripjaws V Series 32GB (2 x 16GB) DDR4 DRAM 3600MHz',
      note: 'Higher RAM capacity can improve performance for multiple virtual machines.',
    },
    Motherboard: {
      option1: 'ASUS Prime X570-Pro',
      option2: 'ASUS ROG Strix X570-E Gaming',
      note: 'These motherboards are ideal for virtualization and multi-device connectivity.',
    },
  };

  // Component to Image mapping
  const imageMapping = {
    CPU: cpuImage,
    GPU: gpuImage,
    RAM: ramImage,
    SSD: ssdImage,
    Motherboard: motherboardImage,
    PowerSupply: powersupplyImage,
  };

  const renderTable = (component) => (
    <div className="mb-4">
      <h2 className="text-primary text-center mb-3" id='rec-text'>
        <img
          src={imageMapping[component] || ''}
          alt={component}
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        {component}
      </h2>
      {/* Table for Recommendations */}
      <table className="table table-bordered table-striped">
        <thead className="custom-thead">
          <tr>
            <th colSpan="4" className="text-center">Recommendations</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Max</td>
            <td>{maximumRecommended[component]?.option1}</td>
            <td>{maximumRecommended[component]?.option2}</td>
            <td>{maximumRecommended[component]?.note}</td>
          </tr>
          <tr>
            <td>Min</td>
            <td>{minimumRecommended[component]?.option1}</td>
            <td>{minimumRecommended[component]?.option2}</td>
            <td>{minimumRecommended[component]?.note}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center text-success">Question Details</h3>

      {/* Question Details */}
      <div className="row">
        {Object.entries(dummyDictionary).map(([key, value], index) => (
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
 
      {/* Recommendations */}
      <div className="container mt-5">
      <h3 className="mb-2 text-center text-success">Hardware Recommendations</h3>
        {Object.keys(minimumRecommended).map((component) => (
          <div key={component}>{renderTable(component)}</div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
