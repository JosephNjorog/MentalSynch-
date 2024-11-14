import React from 'react';
import AssessmentQuiz from '../../components/HealthAssessment/AssessmentQuiz';
import './PhysicalHealthAssessment.css';

const PhysicalHealthAssessment = () => {
  return (
    <div className="physical-health-assessment">
      <h2>Physical Health Assessment</h2>
      <AssessmentQuiz />
    </div>
  );
};

export default PhysicalHealthAssessment;
