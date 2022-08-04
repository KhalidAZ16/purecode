import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo-index.png";

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} className="logo" />
          </Link>
          <Link to="/aboutus" className="aboutus">
            About Us
          </Link>
          <Link to="/Home_ar" className="switch">
            Switch to Arabic
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
