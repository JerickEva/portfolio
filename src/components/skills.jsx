import React from "react";
import Pegaskills from './pegaskills';
import { FcInfo } from "react-icons/fc";
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import data from '../services/data.json';

const Skills = () => {  
const pegaskills = data.pegaVskills;  
const techskills = data.techskills;
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return  (
    <div className="container-fluid" id="skillcontainer">
    <div className="row" >
      <div className="col-sm ">
         <ul className="list-group ">
            <li className="list-group-item active " aria-current="true" id="listgroupheader"><h4>Skills</h4></li>
            {/* <div className="list-group-scroll"> */}
            <li className="list-group-item border border-0 " style={{padding:0}}>
                <div className="ms-2 me-auto" class="shadow p-2 mb-2 bg-body rounded">
                   <div className="fw-bold" ><h6 className="fw-bold">PEGA<FcInfo className="pegainfo" variant="primary" onClick={handleShow}/></h6></div>
                   <>
                   <Modal show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                        <Modal.Title>Pega Technical Skills</Modal.Title>
                     </Modal.Header>
                        <Modal.Body>
                           <Pegaskills/>
                        </Modal.Body>
                        <Modal.Footer>
                           <Button variant="secondary" onClick={handleClose}>
                                Close
                           </Button>
                        </Modal.Footer>
                    </Modal>
    </>
                        <ul>
                            {pegaskills.map((post) => (<li class="shadow p-2 mb-2 bg-body rounded">{post.version}</li>))}
                        </ul> 
                    </div>
            </li>
            
            <div className="ms-2 me-auto" class="shadow p-2 mb-2 bg-body rounded">
            <li className="list-group-item border border-0" style={{padding:0}}>
                   <div className="fw-bold "><h6 className="fw-bold " >Programming technical skills</h6></div>
                       <ul>  
                            {techskills.map((post) => (<li class="shadow p-2 mb-2 bg-body rounded" style={{width: "fit-content",float: "left",margin:3}}>{post.title}</li>))}
                        </ul>
            </li>
            
            </div>
            {/* </div> */}
          </ul>
      </div>
    </div>  
</div>	
  );
};

export default Skills;
