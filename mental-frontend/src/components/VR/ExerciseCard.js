import React from 'react';
import '../VRTherapy/VRTherapy.css';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <h3>{exercise.title}</h3>
      <p>{exercise.description}</p>
    </div>
  );
};

export default ExerciseCard;
