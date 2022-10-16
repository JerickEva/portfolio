import React from "react";
import MyImage from '../images/profilepic.png';
import { BsLinkedin,BsFacebook,BsTwitter,BsDiscord,BsBriefcaseFill,BsFillTelephoneFill} from "react-icons/bs";
import { ImLocation} from "react-icons/im";
import { MdEmail} from "react-icons/md";
import { Link } from 'react-router-dom';

const home = () => {
  return  (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-sm " id="piccontainer">
            <img src={MyImage} alt="profilepic" id="profilepic" class="shadow p-2 mb-2 bg-body rounded"/>
        </div>
        <div className="col-sm"  >
             <div id="rightpanel" >
                      <div >
                        <p style={{fontSize: '48px'}}>Hi, I'm Jerick Eva</p>
                      </div>
                      <div>
                        <p id="homefontsize"><BsBriefcaseFill size={30} className="modicon"/>Lead Consultant at HCL Technologies PH</p>
                      </div>
                      <div>
                        <p id="homefontsize"><BsFillTelephoneFill size={30}  className="modicon"/>(+63) 9672769527</p>
                      </div>
                      <div>
                        <p id="homefontsize" ><MdEmail size={30}  className="modicon"/><Link to="/Sendemail" >evajerick21@gmail.com</Link></p>
                      </div>
                      <div>
                        <p id="homefontsize"><ImLocation size={30}  className="modicon"/>Manila, Philippines</p>
                      </div>
                        <div id="socmed">
                          <div className="container-fluid " >
                              <div className="row">
                                <div className="col-sm " id="homefontsize"><a href="https://www.linkedin.com/in/jerick-eva-0baa3bb0/" target="_blank" style={{color:"black"}}><BsLinkedin size={60}/></a></div>
                                <div className="col-sm " id="homefontsize"><a href="https://discord.com/channels/@me/747106424722817075" target="_blank" style={{color:"black"}}><BsDiscord size={60}/></a></div>
                                <div className="col-sm " id="homefontsize"><a href="https://www.facebook.com/kapi.peyst" target="_blank" style={{color:"black"}}><BsFacebook size={60}/></a></div>
                                <div className="col-sm " id="homefontsize"><a href="https://twitter.com/EvaJerick" target="_blank" style={{color:"black"}}><BsTwitter size={60}/></a></div>
                              </div>  
                          </div>
                        </div>
              </div>
        </div>
      </div>  
    </div>
  
  )  
  ;
};

export default home;
