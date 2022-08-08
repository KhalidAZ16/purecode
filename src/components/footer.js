import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo-index.png";

function Footer() {
  return (
    <>
      <nav className="footer">
        <div className="footer-container">
          <Link to="/" className="footer-logo">
            <img src={logo} className="logo" />
          </Link>
          <h1>Contact Us</h1>
          <h3>phone number : 920010406</h3>
        </div>
      </nav>
    </>
  );
}

export default Footer;
