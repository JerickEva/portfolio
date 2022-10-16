import React, { Component } from "react";
import './App.css';
import Personaldetails from "./components/personaldetails";
import Sendemail from "./components/sendemail";
import Notfound from "./components/notfound";
import Workexperience from "./components/workexperience";
import Certifications from "./components/certifications";
import Downloadcv from "./components/downloadcv";
import Educationalbackground from "./components/educationalbackground";
import Pegaexperience from "./components/pegaexperience";
import Skills from "./components/skills";
import Home from "./components/home";
import Corepage from "./components/corepage";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import NavBar from "./components/navbar";


class App extends Component{
  render(){
    return (
      <React.Fragment>
          <Router>            
           <NavBar />
            <div>          
                <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/Personaldetails" element={<Personaldetails/>}/>
                  <Route path="/Sendemail" element={<Sendemail/>}/>
                  <Route path="/Certifications" element={<Certifications/>}/>
                  <Route path="/Downloadcv" element={<Downloadcv/>}/>
                  <Route path="/Educationalbackground" element={<Educationalbackground/>}/>
                  <Route path="/Corepage" element={<Corepage/>}/>
                  <Route path="/Pegaexperience" element={<Pegaexperience/>}/>
                  <Route path="/Skills" element={<Skills/>}/>
                  <Route path="/Workexperience" element={<Workexperience/>}/>
                  <Route path="*" element={<Notfound/>} />
                </Routes>
            </div>
          </Router>  
      </React.Fragment>    
    );
  }
}

export default App;
