import { useState, useEffect } from 'react';

const useHealthMetrics = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Fetch health metrics
    setMetrics({
      heartRate: 70,
      sleepQuality: 'Good',
      stressLevel: 'Moderate'
    });
  }, []);

  return metrics;
};

export default useHealthMetrics;
