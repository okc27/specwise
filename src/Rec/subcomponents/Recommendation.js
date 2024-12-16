import React from 'react';

function Recommendation({ recommendations }) {
  if (!recommendations) return null;

  return (
    <div className="mt-4">
      <h4>Recommendations:</h4>
      <pre>{JSON.stringify(recommendations, null, 2)}</pre>
    </div>
  );
}

export default Recommendation;
