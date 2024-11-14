import React from 'react';
import VRControls from './VRControls';
import ExerciseCard from './ExerciseCard';
import ProgressTracker from './ProgressTracker';
import './VRTherapy.css';

const VRInterface = () => {
  return (
    <div className="vr-interface">
      <h1>VR Therapy Interface</h1>
      <VRControls />
      <ExerciseCard />
      <ProgressTracker />
    </div>
  );
};

export default VRInterface;
