import React from "react";
import "../styles/Home.css";
import reactLogo from "../images/react-logo.png";
import phpLogo from "../images/php-logo.png";
import backdrop from "../images/background.png"

function Home() {
  return (
    <div className="main">
      <div className="top-main">
        {/* <img src={backdrop} className="homeBackdrop" /> */}
        <p className="catchPhrase">Coding solution couldn't be easier</p>
      </div>
      <br/>
      <br/>
      <div className="whyUs">
        <h1>Why Us?</h1>
        <h2>Best price</h2>
        <h2>20+ years of experince</h2>
        <h2>Proof of quality</h2>
        <h2>24/7 support</h2>
      </div>
      <br />
      <br />
      <div className="services">
        <h1>Solutions for :</h1>
        <ul>
          <li>
            <h2>Business </h2>
          </li>
          <li>
            <h2>Markting </h2>
          </li>
          <li>
            <h2>Web and Mobile Development </h2>
          </li>
        </ul>
      </div>

      <br />
      <br />
      <div className="codingLang">
        <h1>Programming Languages</h1>
        <img src={reactLogo} className="lang1" alt="react" title="React Logo" />
        <img src={phpLogo} className="lang2" alt="php" title="php Logo" />
      </div>

      <div className="companies">
        <img src="" alt="" title="" />
        <img src="" alt="" title="" />
        <img src="" alt="" title="" />
        <img src="" alt="" title="" />
      </div>
    </div>
  );
}
export default Home;
