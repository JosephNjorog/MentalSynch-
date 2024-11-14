import React, { useState } from 'react';
import './HealthAssessment.css';

const QuestionCard = ({ questionId, questionText, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(questionId, answer);
  };

  return (
    <div className="question-card">
      <h3>{questionText}</h3>
      <div className="answers">
        <button onClick={() => handleAnswer('Good')}>Good</button>
        <button onClick={() => handleAnswer('Okay')}>Okay</button>
        <button onClick={() => handleAnswer('Bad')}>Bad</button>
      </div>
    </div>
  );
};

export default QuestionCard;
