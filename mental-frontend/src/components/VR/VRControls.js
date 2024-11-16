import React from 'react';
import '../VRTherapy/VRTherapy.css';

const VRControls = () => {
  return (
    <div className="vr-controls">
      <button>Move Forward</button>
      <button>Move Backward</button>
      <button>Turn Left</button>
      <button>Turn Right</button>
    </div>
  );
};

export default VRControls;
