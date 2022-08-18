import React from "react";
import apply from "../images/apply.png"
import "../styles/Career.css";
import background from "../images/back.png"
import line1 from "../images/Line-1.png"


function Career() {
    return (
      <>
        <nav>
          <div>
         
          <div className="CareerMain">
             <div className="w"></div>
            <div className="catch-phrase"> <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Join Our Team </h2>
             </div>
            <img className="background" src={background} />
          
          <div className="career1">
            <h3> Careers</h3>
            </div>
          <img className="line" src={line1} />
<div className="rectangle">

                    <div className="graphic">    

 <h4>Graphic Design</h4>
 </div>
 <div className="required">    
 <p>
  <div className="req">
    <h4>Required Skills :</h4>
  </div>
 


<h5> •	 Previous experience in graphic design for at least a year .</h5>

<h5> •	 Examples of previous works.</h5>

<h5> •	Enjoy high technical sense.</h5>

<h5> •	Knowledge of graphic design concepts</h5>

 <a href="mailto:hr@purecode.sa?subject=Graphic Design position!"><img className="apply" src={apply} /></a>


 </p>
                    </div>

</div>
<div className="rectangle2">

<div className="graphic">    

<h4>Apps Developer</h4>
</div>
<div className="required">    
<p>
<div className="req">
    <h4>Required Skills :</h4>
  </div>
 


<h5> •	 Previous experience in apps developing for at least a year .</h5>

<h5> •	 Examples of previous works.</h5>

<h5> •	Enjoy high technical sense.</h5>

<h5> •	Knowledge of apps developing concepts</h5>

<a href="mailto:hr@purecode.sa?subject=App Developer position!"><img className="apply" src={apply} /></a>


</p>
</div>

</div>
<div className="rectangle3">

<div className="graphic">    

<h4>Web Developer</h4>
</div>
<div className="required">    
<p>
<div className="req">
    <h4>Required Skills :</h4>
  </div>
 


<h5> •	 Previous experience in web developing for at least a year .</h5>

<h5> •	 Examples of previous works.</h5>

<h5> •	Enjoy high technical sense.</h5>

<h5> •	Knowledge of web developing concepts</h5>

<a href="mailto:hr@purecode.sa?subject=Web Developer position!"><img className="apply" src={apply} /></a>


</p>
</div>

</div>

<div className="rectangle4">

<div className="graphic">    

<h4>Games developer</h4>
</div>
<div className="required">    
<p>
<div className="req">
    <h4>Required Skills :</h4>
  </div>
 


<h5> •	 Previous experience in game developing for at least a year .</h5>

<h5> •	 Examples of previous works.</h5>

<h5> •	Enjoy high technical sense.</h5>

<h5> •	Knowledge of games developing concepts</h5>

<a href="mailto:hr@purecode.sa?subject=Games Developer position!"><img className="apply" src={apply} /></a>


</p>
</div>

</div>
</div>
</div>
    </nav>
    </>
  );
}
export default Career;
