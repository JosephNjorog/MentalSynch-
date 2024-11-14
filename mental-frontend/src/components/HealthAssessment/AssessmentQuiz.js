import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ResultsSummary from './ResultsSummary';
import './HealthAssessment.css';

const AssessmentQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="assessment-quiz">
      {showResults ? (
        <ResultsSummary answers={answers} />
      ) : (
        <>
          <QuestionCard questionId="1" questionText="How do you feel today?" onAnswer={handleAnswer} />
          <QuestionCard questionId="2" questionText="How was your sleep?" onAnswer={handleAnswer} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default AssessmentQuiz;
