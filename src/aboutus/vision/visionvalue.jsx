import React from 'react';
import { FaEye, FaBullseye, FaHandHoldingHeart, FaUserMd, FaCheckCircle, FaFlask } from 'react-icons/fa';
import './visionvalue.css';

const VisionValue = () => {
  const coreValues = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Patient Care",
      description: "Putting our patients' needs first with compassionate care"
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality",
      description: "Maintaining highest standards in pharmaceutical services"
    },
    {
      icon: <FaUserMd />,
      title: "Expertise",
      description: "Professional excellence in healthcare delivery"
    },
    {
      icon: <FaFlask />,
      title: "Innovation",
      description: "Embracing modern healthcare solutions"
    }
  ];

  return (
    <div className="vision-container">
      <div className="vision-section">
        <div className="vision-content">
          <FaEye className="section-icon" />
          <h2>Our Vision</h2>
          <p>To be the leading healthcare provider, ensuring wellness and accessibility for all communities through innovation and excellence.</p>
        </div>
      </div>

      <div className="mission-section">
        <div className="mission-content">
          <FaBullseye className="section-icon" />
          <h2>Our Mission</h2>
          <p>Delivering quality healthcare solutions with integrity, compassion, and commitment to improve lives through innovative pharmaceutical services.</p>
        </div>
      </div>

      <div className="values-section">
        <h2>Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionValue;