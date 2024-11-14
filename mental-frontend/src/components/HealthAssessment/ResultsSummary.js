import React from 'react';
import './HealthAssessment.css';

const ResultsSummary = ({ answers }) => {
  return (
    <div className="results-summary">
      <h3>Results Summary</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsSummary;
