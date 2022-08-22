import React from "react";

import serv from "../images/Serv.png";

import "../styles/Services.css";
function Services() {
  return (
    <div class="serv-bord">
      <div>
        <div className="services-screen">
          <div className="our-ser">
            <h2>Our services are :</h2>
          </div>

          <img className="bg" src={serv} />

          <div className="middle">
            <div className="title">
              <h2>Business solutions : </h2>
            </div>
            <div className="serv-des">
              <h3>
                {" "}
                Purecode has an experienced and creative team that can give you
                an excellent solutions based for your problem. and what is the
                customer doing ? what is the outcome of the task ? Offering
                appropriate business solutions for both big and small businesses
                rather its CRM (Customer Relationship Management ) or ERP
                (Enterprise Resource Planning ).
              </h3>
            </div>

            <div className="title">
              <h2>Ecommerce : </h2>
            </div>
            <div className="serv-des">
              <h3>
                {" "}
                Ecommerce or internet commerce are the future in the last 10
                years ecommerce became the main source for a lot of the houses
                needs and Purecode offers you the ecommerce app that you wanted
                in any model Rather its :
              </h3>
            </div>
            <div className="bus-type">
              <h3>Business to consumer (B2C).</h3>

              <h3>Business to business (B2B).</h3>

              <h3>Consumer to consumer (C2C).</h3>

              <h3>Consumer to business (C2B).</h3>
            </div>

            <div className="title">
              <h2>Game development : </h2>
            </div>
            <div className="serv-des">
              <h3>
                Game development is the art of creating games and describes the
                design, development and release of a game. It may involve
                concept generation, design, build, test and release. <br />{" "}
                While you create a game, it is important to think about the game
                mechanics, rewards, player engagement and level design and
                purecode team will develop the game you want console or mobile
                game RPG MMO or strategy game FPS or even sport game The choice
                is yours.
              </h3>
            </div>

            <div className="title">
              <h2>Mobile apps : </h2>
            </div>
            <div className="serv-des">
              <h3>
                {" "}
                Mobile application is a type of application designed to run on a
                mobile device, which can be a smartphone or tablet computer.
                Even if apps are usually small software units with limited
                function, they still manage to provide users with quality
                services and experiences. <br />
                Purecode can develop a mobile app for you just give us the idea
                and we can make it to an application.
              </h3>
            </div>

            <div className="title">
              <h2>Software development : </h2>
            </div>
            <div className="serv-des">
              <h3>
                {" "}
                Software development refers to the design , documentation,
                programming, testing, and ongoing maintenance of a software
                deliverable.
                <br />
                Purecode team can make the software you want or improve the
                software you got and with the programming language you want and
                the game engine you want.
              </h3>
            </div>

            <div className="title">
              <h2>Web development : </h2>
            </div>
            <div className="last-des">
              <h3>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects such as web design,
                web publishing, web programming, and database management. It is
                the creation of an application that works over the internet i.e.
                websites. <br />
                And purecode team provide Frontend Development and Backend
                Development.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
