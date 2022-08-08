import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo-index.png";

function FooterAr() {
  return (
    <div className="footer_ar">
      <div className="footer-ar-container">
        <Link to="/" className="footer-ar-logo">
          <img src={logo} className="logo" />
        </Link>
        <h1>اتصل بنا</h1>
        <h3>رقم الجوال : 920010406</h3>
      </div>
    </div>
  );
}

export default FooterAr;
