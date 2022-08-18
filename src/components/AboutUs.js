import React from "react";

import line1 from "../images/Line-1.png"
import nlogo from "../images/logo.png"
import background from "../images/back.png"
import pureCode from "../images/pure-code.png"
import team from "../images/team.png"
import planet from "../images/planet.png"
import pure from "../images/pure.png"
import p from "../images/p.png"
import sms from "../images/sms.png"
import promo from "../images/promo.png"
import twitter from "../images/Twitter.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

function AboutUs() {
  return (
    <>
      <nav>
        <div>
          <div className="about-us-screen">

            {
            
            /* <img className="line" src={line1} /> */}

<div className="w"></div>
            <div className="catch-phrase"> <h2> Code solution couldn't be  easier </h2> </div>
            <img className="background" src={background} />
          


          <div className="middle">

          <div className="who-are-we">

          <h2>Our Story</h2>
                             </div>
      <div className="who-1"> 
        <h3>  We are a Saudi institution based in Jeddah specialized in information technology,
              and it employs distinguished national cadres and 
                   international experts of different nationalities.
                     We work on producing professional projects and unlimited support services.</h3>

                      </div>
            {
            /* <img className="pure-code" src={pureCode} /> */}

            <div className="who-are-we">

              <h2>Who are we?</h2>
                    </div>
                    <div className="who-1"> 
              <h3>  Here in PureCode we put the customer needs first. Our mission
                is to help customers unlock their creatvity and build exceptional
                content by our help with the best quality &amp; reasonable
                prices.</h3>

            </div>

            <div className="vision">
              <h2>Our Vision</h2>
              </div>
              <div className="vision-1">
              <h3>  Be a major company on the middle east at business solutions. Also,
                leader in Web design and programming solutions and systems.</h3>
            </div>

            <div className="our-team">
              <h2>Our Team</h2>
              <img className="team" src={team} />
            </div>
            <div className="our-companies1">
            <h2>Our Companies</h2>
              </div>
            <div className="our-companies">
                    
              <img className="planet" src={planet} />
              
              <img className="pure" src={pure} />
              <img className="p" src={p} />
              <img className="sms" src={sms} />
              <img className="promo" src={promo} />
              <h5>&nbsp;</h5>
              <h5>&nbsp;</h5>
            </div>
      
          </div>
            {/* <img className="line" src={line1} /> */}
          
          {/* <div className="footer">
            
            <div className="categories-down">
              <h2>Categories</h2>
              <h4>Business Solutions</h4>
              <h4>Games Development</h4>
              <h4>Web Development</h4>
              <h4>Apps Development</h4>
              <h4>Software Development</h4>
            </div>

            <div className="about">
              <h2>About</h2>
              <h4>Carrers</h4>
              <h4>Partnership</h4>
              <h4>Privacy policy</h4>
              <h4>Terms of services</h4>
              <h4>Our impact</h4>
            </div>

            <div className="contact-us">
              <h2>Contact us</h2>
              <h4>info@purecode.sa</h4>
              <h4>Phone:920010406</h4>
              <h4>Whatsapp: +966*********</h4>
            </div>


            <div className="follow-us">
              <h6>Follow us</h6>
              <img className="twitter" src={twitter} />
              <h6>/PureCodeSA</h6>
              <img className="insta" src={instagram} />
              <h6>/PureCodeSA</h6>
              <img className="facebook" src={facebook} />
              <h6>/PureCodeSA</h6>
            </div>

          </div> */}


        </div>

      </div>
    </nav>
    </>
  );
}
export default AboutUs;
