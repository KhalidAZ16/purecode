import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBarAr.css";
import logo from "../../images/logo-index.png";

function NavBarAr() {
  return (
    <>
      <nav className="navBar_ar">
        <div className="navbar-container">

          <Link to="/en" className="switchAR">
            English
          </Link>
         
          <Link to="/ar/home" className="navbar-logo">
            الرئيسية
          </Link>
          <Link to="/ar/services">
            خدماتنا
          </Link>
          <Link to="/ar/aboutus" className="aboutusAR">
            عن الشركة
          </Link>
          {/* <Link to="/ar/careers">
            التوظيف
          </Link> */}
          <Link to="/ar/contactus">
            تواصل معنا
          </Link>
          <Link to="/ar/home" className="navbar-logo">
            <img src={logo} className="logo" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBarAr;
