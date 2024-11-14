import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">MentalSynch</h2>
          <p>
            MentalSynch is dedicated to providing comprehensive mental health support and resources
            through innovative technology solutions. Our mission is to improve mental wellness and
            support those in need.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +1 234 567 890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@mentalsynch.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
  
