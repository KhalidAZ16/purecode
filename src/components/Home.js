import React from "react";
import "../styles/Home.css";
import logo from "../images/logo-index.png"
function Home() {
  return (

    <div className="main">
      <div className="catchPhrase">
       <h1> code solution couldn't be easier</h1>
      </div>
      <div className="services">
        <h1>Solutions for :</h1>
        <ul>
          <li>Business </li>
          <li>Markting </li>
          <li>Web and Mobile Development </li>
        </ul>
      </div>

      <div className="whyUs">
        <h1>Why Us?</h1>
        <h2>More than 20 years of experince</h2>
        <h2>24/7 costumer support</h2>
      </div>

      <div className="codingLang">
        <img src={logo} alt="company" title="Company Logo"/>
      </div>

      <div className="companies">
        <img src="" alt="" title=""/>
        <img src="" alt="" title=""/>
        <img src="" alt="" title=""/>
        <img src="" alt="" title=""/>
      </div>

    </div>
  );
}
export default Home;
