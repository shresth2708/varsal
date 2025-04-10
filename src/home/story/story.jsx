import React from 'react';
import './story.css';

const Story = () => {
  return (
    <div className="story-container">
      <div className="story-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your YouTube video ID
          title="Company Story"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="story-content">
        <h2>Our Story</h2>
        <div className="divider"></div>
        <h3>Serving Community Since 1995</h3>
        <p>
          Founded with a vision to make healthcare accessible to all, PharmaMed 
          has grown from a small local pharmacy to a trusted healthcare partner. 
          Our journey began when Dr. Smith noticed the need for personalized 
          pharmaceutical care in our community.
        </p>
        <p>
          Today, we're proud to serve thousands of patients with:
        </p>
        <ul>
          <li>24/7 Emergency Services</li>
          <li>Professional Healthcare Consultation</li>
          <li>Home Delivery Services</li>
          <li>State-of-the-art Facilities</li>
        </ul>
        <button className="learn-more">Learn More About Us</button>
      </div>
    </div>
  );
};

export default Story;