import React from 'react';
import { Outlet, Link } from "react-router-dom";

import './navbar.css'; // Make sure to create and style this CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="" alt="Varsal Logo" />
      </div>
      <ul className="navbar-links">
        <li><a>
        <Link to="/">Home</Link>
        </a></li> 
        
        <li><a>
        <Link to="/Product">Products</Link>
        </a></li>

        <li><a>
        <Link to="/investors">Investors</Link>
        </a></li>
        
        <li><a>
        <Link to="/about">AboutUs</Link>
        </a></li>

        <li><a>
        <Link to="/contact">Contact</Link>
        </a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
