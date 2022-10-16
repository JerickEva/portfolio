import React from "react";
import {FaUserGraduate} from "react-icons/fa";
import { ImLocation} from "react-icons/im";

const educationalbackground = () => {
  return  (
    <div className="container-fluid" id="educcontainer">
    <div className="row" >
      <div className="col-sm ">
         <ul class="list-group " >
            <li class="list-group-item active " aria-current="true" id="listgroupheader" ><h4>Educational Background</h4></li>
            {/* <div class="list-group-scroll"> */}
            <li class="list-group-item border border-0"  style={{padding:0}}>
                  <div class=" me-auto  shadow p-2 mb-2 bg-body rounded" >
                        <div class="fw-bold"><FaUserGraduate size={30} className="modicon"/> Tertiary Education (2010-2014)</div>
                        <ul>
                          <li><a href="https://batstate-u.edu.ph/" target="_blank">Batangas State University - The National Engineering University</a></li>
                          <li><b>Bachelor of Science in Computer Science</b></li>
                          <li><ImLocation size={20}  className="modicon"/>Jose P. Laurel Polytechnic College, 25V4+VF3, Malvar, Batangas</li>                         
                        </ul> 
                </div>
            </li>
            {/* <li class="list-group-item">
                  <div class="ms-2 me-auto">
                        <div class="fw-bold"><FaUserGraduate size={30} className="modicon"/> Secondary Education (2004-2008)</div>
                        <ul>
                          <li>Cuenca Institue</li>
                          <li><ImLocation size={20}  className="modicon"/>A. Mabini Street, Cuenca, Batangas</li>
                        </ul> 
                </div>
            </li>
            <li class="list-group-item">
                  <div class="ms-2 me-auto">
                        <div class="fw-bold"><FaUserGraduate size={30} className="modicon"/> Primary Education (1998-2004)</div>
                        <ul>
                          <li>San Felipe Elementary School</li>
                          <li><ImLocation size={20}  className="modicon"/>V2RQ+HW9 San Felipe Elementary School, Cuenca, Batangas</li>
                        </ul> 
                </div>
            </li> */}
            {/* </div> */}
          </ul>
      </div>
    </div>  
</div>	
  );
};

export default educationalbackground;
