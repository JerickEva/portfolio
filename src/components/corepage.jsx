import React from "react";
import Workexperience from "./workexperience";
import Certifications from "./certifications";
import Educationalbackground from "./educationalbackground";
import Characterreference from "./characterreference";
import Skills from "./skills";
import Sendemail from "./sendemail";

const corepage = () => {
  return  (
    <div class="container-fluid" id="corepage">
    <div class="row" >
      <div class="col-md" id="workleft">
        <div id="scrolleft">
        <Certifications/>
        <Skills/>
        </div>
      </div>
      <div class="col-md-6" id="workmiddle">
        <Workexperience/>
      </div>
      <div class="col-md" id="workright">         
        <Sendemail/>     
        <Characterreference/>
        <Educationalbackground/>
      </div>
    </div>  
</div>	

  );
};

export default corepage;
