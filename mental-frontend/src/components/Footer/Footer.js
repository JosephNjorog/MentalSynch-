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
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe</h2>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <form action="#" method="post">
            <input type="email" name="email" className="text-input" placeholder="Your email address..." />
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MentalSynch | Designed by MentalSynch Team
      </div>
    </footer>
  );
}

export default Footer;
