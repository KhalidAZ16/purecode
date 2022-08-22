import React from "react";
import iconL from "../images/location.png";
import iconP from "../images/phone.png";
import iconE from "../images/email.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import maps from "../images/maps.png";
import "../styles/Contact.css";
import wtsapp from "../images/whatsapp.png"
// import contactBackground from "../images/contact-background.jpg"
// import Map from "../components/map.js";

function ContactUs() {
  return (
    <>
      <div class="box5">
        <div class="container-contact">
          <span class="big-circle"></span>

          <div class="form">
            <div class="contact-info">
              <h3 class="title_form">Get in Touch</h3>
              <p class="text">
                Interested in seeing what we can do for you? Call or email us to
                start the conversation.
              </p>

              <div class="info">
                <div class="information">
                  <img src={iconP} class="icon" alt="" />

                  <a
                    href="tel:+966566900074"
                    className="maps1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tel + 966 56 690 0074
                  </a>
                </div>
                {/* <div class="information1">
                  <p>Fax + 966 11 222 1 777</p>
                </div>
                <div class="information1">
                  <p>HR Ext: 1019</p>
                </div>
                <div class="information1">
                  <p>Admin Ext : 1023</p>
                </div> */}
                <div class="information">
                  <img src={iconL} class="icon" alt="" />
                  <a
                    className="maps1"
                    href="https://goo.gl/maps/nQMh94Eze4Nf1t9z8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jeddah - Al Marwah District - Hira St - 8641
                  </a>
                </div>
                <div class="information1">
                  <p>
                    <span className="loc">Al Masah center - Office No.105</span>
                  </p>
                </div>
                {/* <div class="information1">
                  <p>Additional No. 4020 Riyadh 12445 Saudi Arabia</p>
                </div> */}

                <div class="information">
                  <img src={iconE} class="icon" alt="" />
                  <a href="mailto:sales@purecode.sa" className="mail-info">
                    sales@purecode.sa
                  </a>
                </div>
              </div>
              <div class="social-media">
                <p>Connect with us via:</p>
                <div class="social-icons">
                  <a
                    href="https://wa.me/966566900074"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="wtsapp" src={wtsapp} alt="" />
                  </a>
                  <a
                    href="https://twitter.com/PurecodeSa?s=20&t=uE_m0ZLmxwmOp-YnTX8IfQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="tt" src={twitter} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/purecode-sa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="tt" src={linkedin} alt="" />
                  </a>
                  <a
                    href="https://goo.gl/maps/nQMh94Eze4Nf1t9z8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="tt" src={maps} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form autocomplete="off">
                <h3 class="title_form2">Send Us a Message</h3>
                <div class="input-container">
                  <input
                    type="text"
                    name="name"
                    class="input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="input-container">
                  <input
                    type="email"
                    name="user_email"
                    class="input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="input-container">
                  <input
                    type="tel"
                    name="email_subject"
                    class="input"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="input-container textarea">
                  <textarea
                    name="message"
                    class="input"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <input type="submit" value="Send" class="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
