import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './team.css';

const Team = () => {
  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      image: "/assets/ceo.jpg",
      bio: "25+ years of pharmaceutical experience, leading innovation in healthcare",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ceo@pharmamed.com"
      }
    },
    {
      name: "Dr. Priya Shah",
      role: "Chief Medical Officer",
      image: "/assets/cmo.jpg",
      bio: "Specialized in clinical pharmacy with 15+ years experience",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "cmo@pharmamed.com"
      }
    }
  ];

  const executiveTeam = [
    {
      name: "Amit Patel",
      role: "Operations Director",
      image: "/assets/operations.jpg",
      bio: "Managing pharmacy operations across multiple locations"
    },
    {
      name: "Sarah Johnson",
      role: "Research Head",
      image: "/assets/research.jpg",
      bio: "Leading pharmaceutical research and development"
    },
    {
      name: "Dr. Michael Chen",
      role: "Quality Control Head",
      image: "/assets/quality.jpg",
      bio: "Ensuring highest standards in pharmaceutical products"
    }
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Our Leadership</h1>
        <p>Dedicated to Excellence in Healthcare</p>
      </div>

      <div className="leadership-section">
        {leadership.map((leader, index) => (
          <div key={index} className="leader-card">
            <div className="leader-image">
              <img src={leader.image} alt={leader.name} />
            </div>
            <div className="leader-info">
              <h2>{leader.name}</h2>
              <h3>{leader.role}</h3>
              <p>{leader.bio}</p>
              <div className="social-links">
                <a href={leader.social.linkedin}><FaLinkedin /></a>
                <a href={leader.social.twitter}><FaTwitter /></a>
                <a href={`mailto:${leader.social.email}`}><FaEnvelope /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Executive Team</h2>
      <div className="executive-grid">
        {executiveTeam.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;