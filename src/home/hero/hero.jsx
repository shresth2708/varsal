import React from 'react';
import './hero.css';
// import PharmacyImage from '../assets/pharmacy-image.jpg'; // Add your image path

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>Your Health, Our Priority</h1>
        <h3>Trusted Healthcare Solutions Since 1995</h3>
        <p>
          Welcome to PharmaMed, your reliable healthcare partner. We provide
          quality medicines, professional consultation, and personalized care
          to ensure your well-being.
        </p>
        <button className="cta-button">Find Medicines</button>
      </div>
      
      <div className="hero-right">
        <img src="" alt="PharmaMed Store" />
      </div>
    </div>
  );
};

export default Hero;


// {PharmacyImage}