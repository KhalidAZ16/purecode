import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBarAr.css";
// import logo from '../public/logo-index.png';

function NavBar_ar() {
  return (
    <>
      <nav className="navBar_ar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            تغيير للغة الإنقليزية
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar_ar;
