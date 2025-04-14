import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCaretDown } from 'react-icons/fa';
import './navbar.css';
import logo from '../../assets/images/LOGO.jpg'; // Adjust the path as necessary

function Navbar() {
  const [dropdowns, setDropdowns] = useState({
    investors: false,
    about: false
  });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Varsal Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Product">Products</Link></li>
        
        <li className="dropdown" 
            onMouseEnter={() => setDropdowns({...dropdowns, investors: true})}
            onMouseLeave={() => setDropdowns({...dropdowns, investors: false})}>
          <Link to="/investors">
            Investors 
          </Link>
          <ul className={`dropdown-menu ${dropdowns.investors ? 'active' : ''}`}>
            <li><Link to="/investors/annual-report">Annual Report</Link></li>
            <li><Link to="/investors/financials">Financial Results</Link></li>
            <li><Link to="/investors/shareholders">Shareholder Info</Link></li>
          </ul>
        </li>
        
        <li className="dropdown"
            onMouseEnter={() => setDropdowns({...dropdowns, about: true})}
            onMouseLeave={() => setDropdowns({...dropdowns, about: false})}>
          <Link to="/about">
            AboutUs 
          </Link>
          <ul className={`dropdown-menu ${dropdowns.about ? 'active' : ''}`}>
            <li><Link to="/about/vision">Vision & Values</Link></li>
            <li><Link to="/about/team">Our Team</Link></li>
            <li><Link to="/about/history">Company History</Link></li>
          </ul>
        </li>
        
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;