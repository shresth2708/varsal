import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      // Reset status after 3 seconds
      setTimeout(() => setSubscribeStatus(null), 3000);
    }, 1000);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pharmacy-footer">
      {/* Scroll to top button */}
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
      
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <h2>Varsal Pharmaceuticals</h2>
            <p>Trusted healthcare solutions since 1995. Committed to providing quality pharmaceutical products and services for better health and wellness across communities.</p>
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
            <div className="footer-section about-section">
              <h4>About Us</h4>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/about/vision">Vision & Values</Link></li>
                <li><Link to="/about/team">Leadership Team</Link></li>
                <li><Link to="/about/history">Company History</Link></li>
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
                <li><Link to="/Product">Healthcare Solutions</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Investors</h4>
              <ul>
                <li><Link to="/investors/financial">Financial Reports</Link></li>
                <li><Link to="/investors/annual-report">Annual Reports</Link></li>
                <li><Link to="/investors/shareholders">Shareholder Info</Link></li>
                <li><Link to="/investors">Corporate Governance</Link></li>
                <li><Link to="/investors">Sustainability</Link></li>
              </ul>
            </div>
            
            <div className="footer-section contact-section">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <div className="icon-wrapper">
                    <FaPhoneAlt className="contact-icon" />
                  </div>
                  <div>
                    <strong>Helpline</strong>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>contact@varsal.com</span>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <div>
                    <strong>Headquarters</strong>
                    <span>123 Healthcare Avenue, Medical District</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="footer-section newsletter-section">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest health tips, product updates, and exclusive offers.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    aria-label="Email address" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">Subscribe</button>
                </div>
                {subscribeStatus === 'success' && (
                  <div className="subscribe-message success">
                    Thank you for subscribing!
                  </div>
                )}
              </form>
              <p className="privacy-note">By subscribing, you agree to our <Link to="/privacy">Privacy Policy</Link>.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Varsal Pharmaceuticals. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;