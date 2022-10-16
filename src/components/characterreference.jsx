import React from "react";
import data from '../services/data.json';

const characterreference = () => {
  const charref = data.charreferences;
  return  (
    <div className="container-fluid" id="educcontainer">
    <div className="row" >
      <div className="col-sm ">
         <ul class="list-group">
            <li class="list-group-item active" aria-current="true" id="listgroupheader"><h4>Professional References</h4></li>
            <div class="list-group-scroll">            
            {charref.map((post) => (
                  <li class="list-group-item border border-0" style={{padding:0}}>
                      <div class="ms-1 me-auto shadow p-2 mb-2 bg-body rounded">
                              <div class="fw-bold">{post.name}</div>
                                  <ul>
                                  <li><h6>{post.position}</h6></li>
                                      <ul>
                                        <li><b>Company Name: </b>{post.companyname}</li>
                                        <li><b>Mobile: </b>{post.mobilenumber}</li>
                                        <li><b>Email: </b>{post.emailaddress}</li>
                                        <li><b>Relationship: </b>{post.reltoref}</li>
                                      </ul>
                                  </ul> 
                      </div>
                  </li>
            ))}            
            </div> 
          </ul>
      </div>
    </div>  
</div>	
  );
};

export default characterreference;
