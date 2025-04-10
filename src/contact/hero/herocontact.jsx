import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './herocontact.css';

const HeroContact = () => {
  return (
    <div className="contact-hero">
      <div className="contact-overlay">
        <div className="contact-content">
          <h1>Get in Touch</h1>
          <p>We're here to help with all your healthcare needs</p>
          
          <div className="contact-info-grid">
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <p>Emergency: (555) 123-4567</p>
              <p>General: (555) 765-4321</p>
            </div>

            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>info@pharmamed.com</p>
              <p>support@pharmamed.com</p>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Location</h3>
              <p>123 Health Street</p>
              <p>Medical Center, NY 10001</p>
            </div>

            <div className="contact-card">
              <FaClock className="contact-icon" />
              <h3>Hours</h3>
              <p>Mon-Fri: 8AM - 9PM</p>
              <p>Sat-Sun: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;