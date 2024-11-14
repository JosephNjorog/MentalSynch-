import React from 'react';
import './HealthAssessment.css';

const ResultsSummary = ({ answers }) => {
  return (
    <div className="results-summary">
      <h3>Results Summary</h3>
      <p>Question 1: {answers['1']}</p>
      <p>Question 2: {answers['2']}</p>
    </div>
  );
};

export default ResultsSummary;
