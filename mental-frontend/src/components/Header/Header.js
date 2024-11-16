// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/MentalSynch Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MentalSynch Logo" className="logo" />
      </div>
      <nav className="main-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/chat" className="nav-link">AI Chat</Link>
        <Link to="/vr-therapy" className="nav-link">VR Therapy</Link>
        <Link to="/community" className="nav-link">Community</Link>
      </nav>
    </header>
  );
};

export default Header;