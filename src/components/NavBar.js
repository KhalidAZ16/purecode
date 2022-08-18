import React from "react";
import logo from '../images/logo.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

// import logo from "../images/logo-index.png";

function NavBar() {
  return (
    <>
      <Nav>
      <NavLink to='/en/home'>
          <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* 1 */}
          <NavLink to="/en/home" activeStyle>
            Home
          </NavLink>
          {/* 2 */}
          <NavLink to="/en/contactus" activeStyle>
            Contact Us
          </NavLink>
          {/* 3 */}
          <NavLink to="/en/services" activeStyle>
            services
          </NavLink>
          {/* 4 */}
          <NavLink to="/en/aboutus" activeStyle>
            About
          </NavLink>
          {/* 5 */}
          <NavLink to="/en/career" activeStyle>
            Careers
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/ar'>عربي</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default NavBar;