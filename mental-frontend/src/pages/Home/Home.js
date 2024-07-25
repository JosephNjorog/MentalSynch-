// src/pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Mental Health Support" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to MentalSynch</h1>
          <p>Your all-in-one platform for mental and physical wellness</p>
          <Link to="/register" className="cta-button">Get Started</Link>
        </div>
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>AI-Powered Chat</h3>
            <p>Get instant support and guidance from our AI chatbot</p>
          </div>
          <div className="feature-card">
            <h3>VR Therapy</h3>
            <p>Experience immersive therapy sessions in virtual reality</p>
          </div>
          <div className="feature-card">
            <h3>Health Tracking</h3>
            <p>Monitor your mental and physical health progress over time</p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Connect with others and share your journey</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;