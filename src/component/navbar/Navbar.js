import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="navbar-container">
            <Link to="/" class="navbar-logo">Apartment Mate</Link>
            
            <div class="navbar-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <ul class="navbar-menu">
                <li class="navbar-item">
                  <Link to="/" className="navbar-links">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="navbar-links">
                    About
                  </Link>
                </li>
                <li className="navbar-item">
                    <Link to="services" className="navbar-links">
                    Services
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="contact" className="navbar-links">
                    Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
};

export default Navbar;
// Note: The className "navbar navbar-expand-lg bg-body-tertiary" is a placeholder.