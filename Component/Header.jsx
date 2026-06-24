import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import cjclogo from "../assets/cjclogo.png"

function Header() {
  return (
    <nav className="premium-navbar">
      <img src={cjclogo} alt="cjc-logo" width="120px"></img>

      <div className="nav-menu">
        <Link to="/about">About Us</Link>
        <Link to="/courses">Our Courses</Link>
        <Link to="/newBatches">Up-Coming Batches</Link>
        <Link to="/faculty">Our Faculty</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login-btn">Admin Login</Link>
        
      </div>

    </nav>
  );
}

export default Header;
