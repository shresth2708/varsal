import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from 'react-icons/fa';
import './navbar.css';
import logo from '../../assets/images/LOGO.jpg';

function Navbar() {
  const [dropdowns, setDropdowns] = useState({
    investors: false,
    about: false
  });
  
  const navigate = useNavigate();
  
  // Handle navigation with scroll to top
  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Varsal Logo" onClick={() => handleNavClick('/')} style={{cursor: 'pointer'}} />
      </div>
      <ul className="navbar-links">
        <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} style={{cursor: 'pointer'}}>Home</a></li>
        <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/Product'); }} style={{cursor: 'pointer'}}>Products</a></li>
        
        <li className="dropdown" 
            onMouseEnter={() => setDropdowns({...dropdowns, investors: true})}
            onMouseLeave={() => setDropdowns({...dropdowns, investors: false})}>
          <a onClick={(e) => { e.preventDefault(); handleNavClick('/investors'); }} style={{cursor: 'pointer'}}>
            Investors 
          </a>
          <ul className={`dropdown-menu ${dropdowns.investors ? 'active' : ''}`}>
            <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/investors/annual-report'); }} style={{cursor: 'pointer'}}>Annual Report</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/investors/financials'); }} style={{cursor: 'pointer'}}>Financial Results</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/investors/shareholders'); }} style={{cursor: 'pointer'}}>Shareholder Info</a></li>
          </ul>
        </li>
        
        <li className="dropdown"
            onMouseEnter={() => setDropdowns({...dropdowns, about: true})}
            onMouseLeave={() => setDropdowns({...dropdowns, about: false})}>
          <a onClick={(e) => { e.preventDefault(); handleNavClick('/about'); }} style={{cursor: 'pointer'}}>
            AboutUs 
          </a>
          <ul className={`dropdown-menu ${dropdowns.about ? 'active' : ''}`}>
            <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/about/vision'); }} style={{cursor: 'pointer'}}>Vision & Values</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/about/team'); }} style={{cursor: 'pointer'}}>Our Team</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/about/history'); }} style={{cursor: 'pointer'}}>Company History</a></li>
          </ul>
        </li>
        
        <li><a onClick={(e) => { e.preventDefault(); handleNavClick('/contact'); }} style={{cursor: 'pointer'}}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;