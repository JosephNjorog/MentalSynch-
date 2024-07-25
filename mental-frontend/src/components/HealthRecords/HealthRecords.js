// components/HealthRecords/HealthRecords.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useApi } from '../../hooks/useApi';
import './HealthRecords.css';

const HealthRecords = () => {
  const [physicalHealth, setPhysicalHealth] = useState({});
  const [mentalHealth, setMentalHealth] = useState({});
  const { get } = useApi();

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const physicalData = await get('/api/health/physical');
        const mentalData = await get('/api/health/mental');
        setPhysicalHealth(physicalData);
        setMentalHealth(mentalData);
      } catch (error) {
        console.error('Error fetching health data:', error);
      }
    };

    fetchHealthData();
  }, []);

  const physicalHealthChart = {
    labels: physicalHealth.dates,
    datasets: [
      {
        label: 'Weight (kg)',
        data: physicalHealth.weight,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Blood Pressure (systolic)',
        data: physicalHealth.bloodPressure?.map(bp => bp.systolic),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const mentalHealthChart = {
    labels: mentalHealth.dates,
    datasets: [
      {
        label: 'Mood Score',
        data: mentalHealth.moodScores,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      },
      {
        label: 'Stress Level',
        data: mentalHealth.stressLevels,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="health-records">
      <h2>Health Records</h2>
      <div className="health-charts">
        <div className="chart-container">
          <h3>Physical Health Trends</h3>
          <Line data={physicalHealthChart} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }} />
        </div>
        <div className="chart-container">
          <h3>Mental Health Trends</h3>
          <Line data={mentalHealthChart} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }} />
        </div>
      </div>
      <div className="health-stats">
        <div className="physical-health">
          <h3>Physical Health Stats</h3>
          <p>Latest Weight: {physicalHealth.weight?.slice(-1)[0]} kg</p>
          <p>Latest Blood Pressure: {physicalHealth.bloodPressure?.slice(-1)[0]?.systolic}/{physicalHealth.bloodPressure?.slice(-1)[0]?.diastolic} mmHg</p>
          <p>BMI: {physicalHealth.bmi}</p>
          <p>Resting Heart Rate: {physicalHealth.restingHeartRate} bpm</p>
        </div>
        <div className="mental-health">
          <h3>Mental Health Stats</h3>
          <p>Latest Mood Score: {mentalHealth.moodScores?.slice(-1)[0]}/10</p>
          <p>Latest Stress Level: {mentalHealth.stressLevels?.slice(-1)[0]}/10</p>
          <p>Anxiety Index: {mentalHealth.anxietyIndex}/100</p>
          <p>Depression Index: {mentalHealth.depressionIndex}/100</p>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;