import React from 'react';
import AssessmentQuiz from '../../components/HealthAssessment/AssessmentQuiz';
import './MentalHealthAssessment.css';

const MentalHealthAssessment = () => {
  return (
    <div className="mental-health-assessment">
      <h2>Mental Health Assessment</h2>
      <AssessmentQuiz />
    </div>
  );
};

export default MentalHealthAssessment;
