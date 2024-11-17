import React from 'react';
import './HealthMetrics.css';

const HealthMetrics = () => {
  // Sample data for health metrics
  const metrics = {
    heartRate: 72,
    steps: 12000,
    sleep: 8,
    calories: 2000,
    waterIntake: 2.5,
  };

  return (
    <div className="health-metrics">
      <h2>Health Metrics</h2>
      <div className="metric">
        <h3>Heart Rate</h3>
        <p>{metrics.heartRate} bpm</p>
      </div>
      <div className="metric">
        <h3>Steps</h3>
        <p>{metrics.steps} steps</p>
      </div>
      <div className="metric">
        <h3>Sleep</h3>
        <p>{metrics.sleep} hours</p>
      </div>
      <div className="metric">
        <h3>Calories</h3>
        <p>{metrics.calories} kcal</p>
      </div>
      <div className="metric">
        <h3>Water Intake</h3>
        <p>{metrics.waterIntake} liters</p>
      </div>
    </div>
  );
};

export default HealthMetrics;
