import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Apartment Mate</Link>

        <div className="navbar-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
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
            <Link to="searchMovie" className="navbar-links">
              Movie
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" className="navbar-links">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="profile" className="navbar-links">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
// Note: The className "navbar navbar-expand-lg bg-body-tertiary" is a placeholder.