// components/TreatmentPlan/TreatmentPlan.js
import React, { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import './TreatmentPlan.css';

const TreatmentPlan = () => {
  const [plan, setPlan] = useState(null);
  const { get, post } = useApi();

  useEffect(() => {
    const fetchTreatmentPlan = async () => {
      try {
        const data = await get('/api/treatment-plan');
        setPlan(data);
      } catch (error) {
        console.error('Error fetching treatment plan:', error);
      }
    };

    fetchTreatmentPlan();
  }, []);

  const handleCompleteTask = async (taskId) => {
    try {
      await post('/api/treatment-plan/complete-task', { taskId });
      setPlan(prevPlan => ({
        ...prevPlan,
        tasks: prevPlan.tasks.map(task =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      }));
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  if (!plan) return <div className="loading">Loading treatment plan...</div>;

  return (
    <div className="treatment-plan">
      <h2>Your Personalized Treatment Plan</h2>
      <div className="plan-overview"></div>