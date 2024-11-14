import React from 'react';
import ExerciseCard from './ExerciseCard';
import ProgressTracker from './ProgressTracker';
import VRControls from './VRControls';
import './VRTherapy.css';

const VRInterface = ({ exercises, progress }) => {
  return (
    <div className="vr-interface">
      <VRControls />
      <ProgressTracker progress={progress} />
      <div className="exercise-cards">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default VRInterface;
