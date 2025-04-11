import React from 'react';
import { FaPills, FaUserMd, FaHospitalUser, FaHeartbeat, FaSyringe, FaStethoscope } from 'react-icons/fa';
import './services.css';

const HealthServices = () => {
  const services = [
    {
      icon: <FaPills />,
      title: "Medication Management",
      description: "Personalized medication reviews and management plans to ensure optimal treatment outcomes.",
      price: "₹500/session"
    },
    {
      icon: <FaUserMd />,
      title: "Health Consultations",
      description: "One-on-one consultations with experienced healthcare professionals.",
      price: "₹800/session"
    },
    {
      icon: <FaHospitalUser />,
      title: "Wellness Programs",
      description: "Comprehensive wellness programs focusing on preventive healthcare.",
      price: "₹1500/month"
    },
    {
      icon: <FaHeartbeat />,
      title: "Health Screening",
      description: "Regular health check-ups and vital signs monitoring.",
      price: "₹1000/checkup"
    },
    {
      icon: <FaSyringe />,
      title: "Vaccination Services",
      description: "Regular and seasonal vaccination services for all age groups.",
      price: "Varies by type"
    },
    {
      icon: <FaStethoscope />,
      title: "Chronic Disease Management",
      description: "Specialized care programs for managing chronic conditions.",
      price: "₹2000/month"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Health Services</h1>
        <p>Professional healthcare services tailored to your needs</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-price">{service.price}</div>
            <button className="book-button">Book Service</button>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>Need More Information?</h2>
        <p>Contact our healthcare team for personalized assistance</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default HealthServices;