import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HealthMetrics from './HealthMetrics.js';
import AppointmentScheduler from './AppointmentScheduler.js';
import useCustomApi from '../../hooks/useApi';
import './Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const { get } = useCustomApi();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await get('/api/user/data');
        setUserData(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="dashboard">
      <h1>Welcome, {userData.name}!</h1>
      <div className="dashboard-grid">
        <HealthMetrics metrics={userData.healthMetrics} />
        <AppointmentScheduler appointments={userData.appointments} />
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <Link to="/chat" className="action-button">Start Chat Session</Link>
          <Link to="/vr-therapy" className="action-button">Begin VR Therapy</Link>
          <Link to="/mental-health-assessment" className="action-button">Mental Health Check</Link>
          <Link to="/physical-health-assessment" className="action-button">Physical Health Check</Link>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            {userData.recentActivity.map((activity, index) => (
              <li key={index} className="activity-item">
                <span className="activity-icon">{activity.icon}</span>
                <div className="activity-content">
                  <p className="activity-description">{activity.description}</p>
                  <span className="activity-date ref">{new Date(activity.date).toLocaleDateString()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;