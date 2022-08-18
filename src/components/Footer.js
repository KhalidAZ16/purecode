import React from "react";
import "../styles/Footer.css";
import logo_index from "../images/logo-index.png";
import gateway from "../images/gateway.png";
import prohost from "../images/prohost.png";
import promo from "../images/promo.png";
import planet from "../images/planet.png";
import twitter from "../images/Twitter.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import line1 from "../images/Line-1.png"
import whatsapp from "../images/whatsapp.png"
import phone from "../images/phone.png"
import mail from "../images/mail.png"




function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <ul>
            <li><img src={logo_index} className="lang1"/></li>
            <li>A Branch of:</li>
            <li><img src={planet} className="lang1"/></li>
          </ul>    
        </div>
        <div className="footer-col">
          <h4>
            PureCode
          </h4>
          <ul>
            <li><a href="/en/aboutus">About Us</a></li>
            <li><a href="/en/contactus">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>    
        </div>

        <div className="footer-col">
<h4>Contact us</h4>

<ul>
            <li><a href="mailto:info@purecode.sa?subject=Testing out mailto!"><img src={mail} className="mailLogo" />
              :                  info@purecode.sa</a> </li>

              <li><a href="tel:+966566900074"><img src={phone} className="phoneLogo" />
              :                  Call us</a> </li>

              <li><a href="https://wa.me/+966566900074"><img src={whatsapp} className="whatsappLogo" />
              :                 Click to chat </a> </li>
          </ul>    

        </div>
           
        {/* <div className="footer-col">
          <h4>
            Services
          </h4>
          <ul>
            <li><a href="#">Service 1</a></li>
            <li><a href="#">Service 2</a></li>
            <li><a href="#">Cont...</a></li>
          </ul>    
        </div> */}
        <div className="footer-col">
          
              <h4>Follow us</h4>
              <ul>
              <li><a href="https://mobile.twitter.com/purecodesa"><img className="twitter" src={twitter} />
              /PureCodeSA</a></li>
           
              <li><a href="#"> <img className="insta" src={instagram} />
              /PureCodeSA</a></li>
             
              <li><a href="#"><img className="facebook" src={facebook} />
              /PureCodeSA</a></li>
            
            </ul>
           
        </div>  
      </div>
      <hr/>
      <div className="footer-line">
      
      <li>
        &copy;All right reserved for PureCode {new Date().getFullYear()}
      </li>
      </div>
      
    </div>
  );
}

export default Footer;
