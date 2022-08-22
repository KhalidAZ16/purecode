import React from "react";
import "../styles/Home.css";
import logo from "../images/react-logo.png";
import pure from "../images/new-purecode.png";
import javaS from "../images/javascript.png"
import java from "../images/java.png"
import htmlLogo from "../images/htmlLogo.png"
import unity from "../images/unity.png"
import python from "../images/python.png"
import angularjs from "../images/angularjs.png"
function Home() {
  return (
    <div className="main">
      <div className="catchPhrase">
        <h1> Coding Solution Couldn't Be Easier</h1>
      </div>
      {/* <div className="background-home">
        <img src={pure}/>
      </div> */}
      <br />
      <div className="services">
        <h1>Solutions for :</h1>
        <ul>
          <li>Business </li>
          <li>Markting </li>
          <li>Game Development </li>
          <li>Web Development </li>
          <li>Mobile Development </li>
        </ul>
      </div>
      <br />
      <div className="whyUs">
        <h1>Why Us?</h1>
        <ul>
          <li>20+ years of experince</li>
          <li>24/7 costumer support</li>
          <li>Satisfaction guaranted</li>
        </ul>
      </div>

      <div className="codingLang">
        <h1>Programming Languages</h1>
        <div className="langs">
          <img src={logo} className="lang1" alt="react" title="React Logo" />
          <img src={javaS} className="lang1" alt="JavaScript" title="JavaScript Logo" />
          <img src={java} className="lang1" alt="Java" title="Java Logo" />
          <img src={htmlLogo} className="lang1" alt="Html" title="Html Logo" />
          <img src={unity} className="lang1" alt="Unity" title="Unity Logo" />
          <img src={python} className="lang1" alt="python" title="Python Logo" />
          <img src={angularjs} className="lang1" alt="angularjs" title="Angularjs Logo" /> 
        </div>
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
