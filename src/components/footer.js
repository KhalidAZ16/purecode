import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../images/logo-index.png";
import promo from "../images/promo.png";
import prohost from "../images/prohost.png";
import tco from "../images/tco.png";
import gateway from "../images/gateway.png";

function Footer() {
  return (
    <>
      <div className="footerMain">
        <div className="footer-container">
          <Link to="/" className="footer-logo">
            <img src={logo} className="footerLogo" />
          </Link>
          <div className="top-footer">
            {/* Left side */}
            <div className="left-footer">
              {/* Add Logo */}
              <h5 className="aboutus-footer">About Us</h5>
              <div className="aboutus-footer-list">
                <h6>about us but in lowercase</h6>
              </div>
            </div>
            {/* Mid  */}
            <div className="mid-footer">
              <h5>Services</h5>
            </div>

            {/* Right */}
            <div className="right-footer">
              <h5>Companies</h5>
              {/* <div className="right-footer-comp"></div> */}
              <Link to="/" className="comp-logo1">
                <img src={promo} className="company1" />
              </Link>
              <Link to="/" className="comp-logo2">
                <img src={prohost} className="company2" />
              </Link>
              <Link to="/" className="comp-logo3">
                <img src={tco} className="company3" />
              </Link>
              <Link to="/" className="comp-logo4">
                <img src={gateway} className="company4" />
              </Link>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="contactInfo">
              <h5>Contact Us</h5>
              <h5>phone number : 920010406</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
