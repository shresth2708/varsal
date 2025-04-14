import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="pharmacy-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <h2>Varsal</h2>
            <p>Trusted healthcare solutions since 1995. Committed to providing quality pharmaceutical products and services for better health.</p>
            <div className="social-icons">
              <a href="https://facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com/" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://instagram.com/" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>About Us</h4>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/about">Vision & Values</Link></li>
                <li><Link to="/about">Leadership Team</Link></li>
                <li><Link to="/contact">Careers</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Products & Services</h4>
              <ul>
                <li><Link to="/Product">Medications</Link></li>
                <li><Link to="/Product">Health Services</Link></li>
                <li><Link to="/Product">Medical Devices</Link></li>
                <li><Link to="/Product">Wellness Products</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Investors</h4>
              <ul>
                <li><Link to="/investors">Financial Reports</Link></li>
                <li><Link to="/investors">Annual Reports</Link></li>
                <li><Link to="/investors">Shareholder Info</Link></li>
                <li><Link to="/investors">Corporate Governance</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>contact@varsal.com</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Healthcare Ave, Medical District</span>
                </li>
              </ul>
            </div>
            
            <div className="footer-section newsletter-section">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest health tips and product updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" aria-label="Email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Varsal. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;