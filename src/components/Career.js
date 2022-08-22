import React from "react";
import apply from "../images/apply.png";
import "../styles/Career.css";
import background from "../images/back.png";
import line1 from "../images/Line-1.png";

function Career() {
  return (
    <>
      <nav>
        <div>
          <div className="CareerMain">
            <div className="top-career">
              <div className="catch-phrase">
                {" "}
                <h2> Be a member of our team </h2>{" "}
              </div>
              <img className="background-career" src={background} />
            </div>

            <div className="bottom-career">
              <div className="career1">
                <h3>Careers</h3>
              </div>
              <img className="line1" src={line1} />
              <div className="rectangle">
                <div className="graphic">
                  <h4>Graphic Design</h4>
                </div>
                <div className="required">
                  <p>
                    <h5>Required Skills :</h5>

                    <h6>
                      {" "}
                      Previous experience in graphic design for at least a year.
                    </h6>

                    <h6> Examples of previous works.</h6>

                    <h6>Enjoy high technical sense.</h6>

                    <h6>Knowledge of graphic design concepts</h6>

                    <a href="mailto:info@purecode.sa?subject=Graphic Design position!">
                      <img className="apply" src={apply} />
                    </a>
                  </p>
                </div>
              </div>
              <div className="rectangle2">
                <div className="graphic">
                  <h4>Apps Developer</h4>
                </div>
                <div className="required">
                  <p>
                    <h5>Required Skills :</h5>

                    <h6>
                      {" "}
                      Previous experience in app developing for at least a
                      year..
                    </h6>

                    <h6> Examples of previous works.</h6>

                    <h6>Enjoy high technical sense.</h6>

                    <h6>Knowledge of apps developing concepts</h6>

                    <a href="mailto:info@purecode.sa?subject=App Developer position!">
                      <img className="apply" src={apply} />
                    </a>
                  </p>
                </div>
              </div>
              <div className="rectangle3">
                <div className="graphic">
                  <h4>Web Developer</h4>
                </div>
                <div className="required">
                  <p>
                    <h5>Required Skills :</h5>

                    <h6>
                      {" "}
                      Previous experience in web developing for at least a year.
                    </h6>

                    <h6> Examples of previous works.</h6>

                    <h6>Enjoy high technical sense.</h6>

                    <h6>Knowledge of web developing concepts</h6>

                    <a href="mailto:info@purecode.sa?subject=Web Developer position!">
                      <img className="apply" src={apply} />
                    </a>
                  </p>
                </div>
              </div>

              <div className="rectangle4">
                <div className="graphic">
                  <h4>Games developer</h4>
                </div>
                <div className="required">
                  <p>
                    <h5>Required Skills :</h5>

                    <h6>
                      {" "}
                      Previous experience in games developing for at least a
                      year.
                    </h6>

                    <h6> Examples of previous works.</h6>

                    <h6>Enjoy high technical sense.</h6>

                    <h6>Knowledge of games developing concepts</h6>

                    <a href="mailto:info@purecode.sa?subject=Games Developer position!">
                      <img className="apply" src={apply} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Career;
