import React from 'react';
import './HealthAssessment.css';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h3>{question.text}</h3>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
