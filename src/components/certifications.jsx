import React from "react";
import CSA from '../images/CSA.png';
import CSSA from '../images/CSSA.png';
import Carousel from 'react-bootstrap/Carousel';
const certifications = () => {  

  return  (
    <div className="container-fluid" id="certcontainer">
    <div className="row" >
      <div className="col-sm ">
      <Carousel>  
    <Carousel.Item >  
        <img className="d-block w-100" alt="CSSA" src={CSSA}  />  
    </Carousel.Item  >  
	<Carousel.Item >  
        <img className="d-block w-100" alt="CSA" src={CSA}  />  
    </Carousel.Item  >  
</Carousel> 
      </div>
    </div>  
</div>	
  );
};

export default certifications;
