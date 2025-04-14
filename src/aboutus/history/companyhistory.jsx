import React from 'react';
import { FaHistory, FaMedal, FaBuilding, FaGlobe } from 'react-icons/fa';
import './companyhistory.css';

const CompanyHistory = () => {
  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      description: "Varsal Pharmacy established its first store in Mumbai",
      icon: <FaBuilding />
    },
    {
      year: "2000",
      title: "Expansion Phase",
      description: "Expanded to 10 stores across Maharashtra",
      icon: <FaGlobe />
    },
    {
      year: "2010",
      title: "ISO Certification",
      description: "Received ISO 9001:2000 certification for quality management",
      icon: <FaMedal />
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched online pharmacy services",
      icon: <FaGlobe />
    },
    {
      year: "2020",
      title: "National Presence",
      description: "Expanded operations to 50+ cities across India",
      icon: <FaBuilding />
    },
    {
      year: "2023",
      title: "Healthcare Innovation",
      description: "Introduced AI-powered health consultation services",
      icon: <FaMedal />
    }
  ];

  return (
    <div className="history-container">
      <div className="history-header">
        <FaHistory className="history-icon" />
        <h1>Our Journey</h1>
        <p>From a Single Store to a Healthcare Leader</p>
      </div>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="milestone-icon">{milestone.icon}</div>
              <h2>{milestone.year}</h2>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-section">
        <h2>Key Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>50+</h3>
            <p>Cities Present</p>
          </div>
          <div className="achievement-card">
            <h3>1M+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="achievement-card">
            <h3>200+</h3>
            <p>Stores Nationwide</p>
          </div>
          <div className="achievement-card">
            <h3>25+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;