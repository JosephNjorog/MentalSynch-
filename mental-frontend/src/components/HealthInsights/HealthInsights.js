// components/HealthInsights/HealthInsights.js
import React, { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import './HealthInsights.css';

const HealthInsights = () => {
  const [insights, setInsights] = useState([]);
  const { get } = useApi();

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await get('/api/health/insights');
        setInsights(data);
      } catch (error) {
        console.error('Error fetching health insights:', error);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div className="health-insights">
      <h2>AI-Powered Health Insights</h2>
      <ul className="insights-list">
        {insights.map((insight, index) => (
          <li key={index} className="insight-item">
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
            <div className="insight-metrics">
              <span className="confidence">Confidence: {insight.confidence}%</span>
              <span className="impact">Impact: {insight.impact}/10</span>
            </div>
            <div className="insight-actions">
              <button onClick={() => window.open(insight.learnMoreUrl, '_blank')}>Learn More</button>
              <button onClick={() => window.location.href = insight.actionUrl}>Take Action</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthInsights;