import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MentalSynch</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/physio">Physiotherapy</a></li>
        <li><a href="/chatbot">Chatbot</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
