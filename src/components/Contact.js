import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../styles/Contact.css";
// import contactBackground from "../images/contact-background.jpg"
// import Map from "../components/map.js";

function ContactUs() {
  return (
    <>
      <nav>
        <div className="contactContainer">
          {/* <img src={contactBackground} className="contactBackground"/> */}
          <div className="contactUs">
            <h1>Contact Us</h1>
            <div className="location">
              <br />
              <h3>
                <a
                  href="https://goo.gl/maps/hHV2rsMYL983ewBXA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our location
                </a>
              </h3>
              <h4>
                Saudi Arabia - Jeddah - Al Marwah <br /> Hira street - Al Masah
                Center - Office No.105
              </h4>
            </div>

            {/* Add Whatsapp icon  */}

            <h3>
              E-mail :<a href="mailto:info@purecode.sa">info@purecode.sa</a>
            </h3>

            {/* Add Phone Icon */}
            <h3>920010406</h3>

            {/* Add social media */}
          </div>
          <div className="contactForm">
            <h3>Fill the form below and we will contact you</h3>
            <label>
              Name :
              <br />
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email :
              <br />
              <input type="email" name="email" />
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
export default ContactUs;
