import React, { useState } from 'react';
import './AppointmentScheduler.css';

const AppointmentScheduler = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState('');

  const handleAddAppointment = () => {
    if (newAppointment.trim()) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment('');
    }
  };

  return (
    <div className="appointment-scheduler">
      <h2>Appointment Scheduler</h2>
      <div className="appointment-list">
        {appointments.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="appointment-form">
        <input
          type="text"
          value={newAppointment}
          onChange={(e) => setNewAppointment(e.target.value)}
          placeholder="Enter new appointment"
        />
        <button onClick={handleAddAppointment}>Add Appointment</button>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
