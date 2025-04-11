import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="pharmacy-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/prescriptions">Vision & Values</a></li>
          </ul>
          <h1>Varsal</h1>
          <p>Your trusted pharmacy for all medication and healthcare needs.</p>
        </div>

        <div className="footer-section">
          <h4>Operation</h4>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/quality">Quality</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Investors</h4>
          <ul>
            <li><a href="/financial">Financials</a></li>
            <li><a href="/report">Annual Reports</a></li>
            <li><a href="/shareholder">Shareholders</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/services">Health Services</a></li>
            <li><a href="/partner">Partner with us</a></li>
            <li><a href="/adverse">Adverse Events</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Varsal. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;