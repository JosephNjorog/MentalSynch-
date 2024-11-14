import React from 'react';
import './VRTherapy.css';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="progress-tracker">
      <h4>Progress</h4>
      <div className="progress-bar">
        <div 
          className="progress-bar-inner" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
