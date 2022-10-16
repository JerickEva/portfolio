import React,{ useRef} from "react";
import emailjs from 'emailjs-com';
import { MdOutlineAttachEmail} from "react-icons/md";
import {toast} from 'react-toastify'

export const Sendemail = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('JerickEva.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'JerickEva.pdf';
            alink.click();
        })
    })
}
const form = useRef();
const SendEmailfromsite = (e) =>{
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_5r7hu7c', form.current, 'dRPqX5fO1qp_ZBgdT')
    .then((result) => {
      alert("Form Submitted Successfully")
        // toast({message: 'Button was clicked', });
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

  return  (
    <div className="container-fluid" id="educcontainer">
    <div className="row" >
      <div className="col-sm " id="sendemail">
      <button class="btn btn-primary"  onClick={onButtonClick} type="button" data-bs-toggle="offcanvas" id="downloadbtn"   aria-controls="offcanvasRight" style={{backgroundColor: '#76b9d1'}}><h4>Download CV</h4></button>    
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" id="sendemailbtn"  data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{backgroundColor: '#76b9d1'}}><MdOutlineAttachEmail size={30} className="emailicon"/></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">I'm looking forward to your email</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="container-fluid" id="sendemailcontainer">
       <div className="row" >
       <form className="row g-3 needs-validation" ref={form}  novalidate onSubmit={SendEmailfromsite}>
          <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" required/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              <label htmlFor="floatingInput" style={{color:"black"}}>Email address</label>
          </div>
          <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Subject" name="subject" required/>
              <label htmlFor="floatingInput" style={{color:"black"}}>Subject</label>
          </div>
          <div className="form-floating mb-3">
              <textarea type="text" className="form-control" id="floatingInput" placeholder="Message" style={{height :200}} name="message" required/>
              <label htmlFor="floatingInput" style={{color:"black"}}>Please provide a message</label>
          </div>
          {/* <div className="mb-3">
             <input className="form-control form-control-sm" id="formFileSm" type="file"/>
          </div> */}
          <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                      You must agree before submitting.
                </div>
              </div>
          </div>
          <div className="mb-3">
              <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
        </div>  
    </div>	
  </div>
</div>
    </div> 
    </div>	 
</div>	
  );
  
};

export default Sendemail;
