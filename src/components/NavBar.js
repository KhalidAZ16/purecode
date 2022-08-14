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
          <Link to="/en/contactus" className="contactEN">
            Contact 
          </Link>
          <Link to="/en/services" className="servicesEN">
            Services
          </Link>
          <Link to="/en/aboutus" className="aboutusEn">
            About 
          </Link>
          <Link to="/en/careers" className="careersEN">
            Careers
          </Link>
          <Link to="/ar/Home" className="switchEN">
            عربي
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
