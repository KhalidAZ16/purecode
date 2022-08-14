import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
// import Map from "../components/map.js";

function ContactUs() {
  return (
    <>
      <nav>
        <div className="contactUs">
          <h1>Contact Us</h1>
          <div className="location">
            <h3>
              <a href="https://goo.gl/maps/hHV2rsMYL983ewBXA">Our location</a>
            </h3>
            <h4>
              Saudi Arabia - Jeddah - Al Marwah <br /> Hira street - Al Masah
              Center - Office No.105
            </h4>
          </div>

          {/* Add Whatsapp icon  */}

          <h3>
            E-mail :<a href="mailto:info@purecode.sa" className="emailLink">info@purecode.sa</a>
          </h3>

          {/* Add Phone Icon */}
          <h3>920010406</h3>

          {/* Add social media */}
        </div>
      </nav>
    </>
  );
}
export default ContactUs;
