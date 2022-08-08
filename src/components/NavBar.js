import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo-index.png";

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="navbar-container">
          <Link to="/en" className="navbar-logo">
            <img src={logo} className="logo" />
            Home
          </Link>
          <Link to="/en/contactus">
            Contact Us
          </Link>
          <Link to="/en/services">
            Services
          </Link>
          <Link to="/en/aboutus" className="aboutus">
            About Us
          </Link>
          <Link to="/en/careers">
            Careers
          </Link>
          <Link to="/ar/Home" className="switch">
            عربي
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
