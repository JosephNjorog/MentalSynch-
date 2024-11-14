import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ResultsSummary from './ResultsSummary';
import './HealthAssessment.css';

const AssessmentQuiz = ({ questions, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onSubmit(answers);
    }
  };

  return (
    <div className="assessment-quiz">
      {currentQuestionIndex < questions.length ? (
        <QuestionCard 
          question={questions[currentQuestionIndex]} 
          onAnswer={handleAnswer} 
        />
      ) : (
        <ResultsSummary answers={answers} />
      )}
    </div>
  );
};

export default AssessmentQuiz;
