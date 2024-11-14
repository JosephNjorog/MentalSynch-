import React, { createContext, useState } from 'react';

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [healthData, setHealthData] = useState({});

  const updateHealthData = (newData) => {
    setHealthData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <HealthContext.Provider value={{ healthData, updateHealthData }}>
      {children}
    </HealthContext.Provider>
  );
};
