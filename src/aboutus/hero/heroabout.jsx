import React from 'react';
import { FaUsers, FaMedkit, FaCertificate, FaHandHoldingMedical } from 'react-icons/fa';
import './heroabout.css';

const HeroAbout = () => {
  const stats = [
    { icon: <FaUsers />, number: "50K+", text: "Happy Customers" },
    { icon: <FaMedkit />, number: "25+", text: "Years Experience" },
    { icon: <FaCertificate />, number: "100%", text: "Certified Products" },
    { icon: <FaHandHoldingMedical />, number: "24/7", text: "Customer Support" }
  ];

  return (
    <div className="about-hero">
      <div className="about-overlay">
        <div className="about-content">
          <h1>Leading Healthcare Since 1995</h1>
          <p className="mission-statement">
            Dedicated to providing quality healthcare solutions with a commitment 
            to excellence and customer well-being.
          </p>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h2>{stat.number}</h2>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="company-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>Ensuring highest standards in all our products</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Building trust through honest practices</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Embracing modern healthcare solutions</p>
              </div>
              <div className="value-item">
                <h3>Care</h3>
                <p>Prioritizing patient well-being</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;