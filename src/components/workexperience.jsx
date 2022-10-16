import React from "react";
import  {useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {useAccordionButton} from 'react-bootstrap/AccordionButton';

const workexperience = () => {
  return  (
    <div className="container-fluid">
      <div className="row">
    <Container>
    <Row>
        <Col>
           <div id="workheader" > <h2> Work Experience</h2></div>
            <div class="shadow p-2 mb-2 bg-body rounded ">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div class="container">
                                <div class="row">
                                    <div class="col-auto me-auto"><h6>HLC Technologies Philippines </h6></div>
                                    <div class="col-auto"><h6>2021 to Present</h6></div>
                                </div>
                             </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div class="container" id="expdetails">
                            <div class="row">

                        <p><b>Deployed to ING Philippines</b></p>
                        <p>Apr 2022 - Present<br/>
                        Manila, National Capital Region, Philippines.<br/>
                        Under DEVOps for FEC Policy Squad Manila (GKYC Policy Cluster).<br/>
                        Roles:<br/>
                        DevOps Under for FEC Policy Squad Manila (GKYC Policy Cluster) Roles Development and
                        Automation of unit testing<br/>
                        Skills: Pega Developer</p>
                        <p><b>Lead Consultant at HCL Philippines</b><br/>   
                        Metro Manila, National Capital Region, Philippines<br/>
                        Specialized in Pega Platform development.<br/>
                        Current Project involvement:<br/>
                        Project: ING - Global GKYC under FECNP (FEC (Financial Economic Crime) processes for Natural
                            Persons).<br/>
                        Role: Development/ Operations (Automation Unit Testing in PEGA) Specialized in Pega
                        Platform development.<br/>
                        Current Project involvement: ING - Global GKYC under FECNP (FEC (Financial
                            Economic Crime) processes for Natural Persons).<br/>
                        Role: Development/ Operations (Automation Unit Testing in PEGA)<br/>
                        Skills: Software Development using PEGA</p>

                             </div>
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div class="container">
                                <div class="row">
                                    <div class="col-auto me-auto"><h6>Software Developer (PEGA) - Avenys Agency (Singapore)</h6></div>
                                    <div class="col-auto"><h6>2020 to 2021</h6></div>
                                </div>
                             </div>                            
                        </Accordion.Header>
                        <Accordion.Body>
                        <div class="container" id="expdetails">
                            <div class="row">
                        <p>Pega Survey Framework</p>
                        <p>Labour Statistics Survey Portal(LSSP) - Application for Singaporean that allows them to answer
                        the survey and provide details of each family member and allow them to answer surveys in
                        behalf of them.Surveys are updated every 6 months and data captured will be sync from
                        Internet to Intranet and v/v.</p>
                        <p>Role : Modified Skin,Harness or mostly UI, specially updating the templates of the survey based
                        on the business requirements. It also includes modifying HTML/CSS adding jquery/javascript
                        and updating Web-login. And make sure the application runs on all devices.</p>                         
                        </div>
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                             <div class="container">
                                <div class="row">
                                    <div class="col-auto me-auto"><h6>Application Developer (PEGA) - Luxoft Company (Singapore)</h6></div>
                                    <div class="col-auto"><h6>2019 to 2020</h6></div>
                                </div>
                             </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div class="container" id="expdetails">
                            <div class="row">  
                        <p><b>MORE STP</b> – Application for building business in Singapore. I worked on back-end development
                        using PEGA Services (Service-REST) and (Connect-REST). I am also responsible for the design and REF generation of the application, and work on this project from DEV to PROD.</p>
                        <p><b>ALS</b> – it is an auto loan application online that reduces the manual process. I worked on the UI
                        part of PEGA and (Connect-REST). Also collaborate with business users for requirements
                        gathering for change requests.</p>
                        <p><b>CIU</b> – it is a pure PEGA application, and I worked mostly on UI, and services mapping of request
                        and response of the services (Integration).</p>
                        <p><b>OBAO</b> – it is an online application also, with Angular as front-end and PEGA as back-end
                        software. I worked on request and response mapping from UI and vice versa, Services (REST)
                        and Connect (REST).</p>
                        <p><b>Structured Deposit Application (Changed Request) </b> – I worked on 3 changed requests on this
                        project which also involve mapping of request and response from the services. End-to end
                        testing, deployment, and support as BAU. (REST) and Connect (REST).</p>
                        <p><b>ITSR</b> – I worked on lists of changes requests for OCBC applications that include PEGA changes
                        in the back-end.</p>                        
                        </div>
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div class="container">
                                <div class="row">
                                    <div class="col-auto me-auto"><h6>Application Developer (PEGA) - Compo 2000 Pte Ltd (Singapore)</h6></div>
                                    <div class="col-auto"><h6>2018 to 2019</h6></div>
                                </div>
                             </div>  
                            </Accordion.Header>
                        <Accordion.Body>
                        <div class="container" id="expdetails">
                            <div class="row">
                        <p><b>Structured Deposit Application</b> – it involves integration with a lot of services, from UI and from
                        third party applications. I also worked here from DEV to PROD and BAU support, and was
                        responsible for the mapping of requests and responses from the service. We implement
                        Service (SOAP) and Connect (SOAP) on this project.</p>
                        <p><b>Structured Deposit Cancellation </b> – it is a continuation of the project above (SDA) but this is to
                        cancel the product that was applied in a structured deposit application. I am responsible for
                        the development of the whole project from DEV to PROD because it is only a pure PEGA
                        application with integration of service (Connect-SOAP).</p>
                        <p><b>ITSR</b> – I worked on 2 changes requests for an OCBC application that includes PEGA changes in
                        the back-end.</p>                        
                        </div>
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <div class="container">
                                <div class="row">
                                    <div class="col-auto me-auto"><h6>Senior System Analyst (PEGA) - Accenture Philippines (Quezon City, Philippines)</h6></div>
                                    <div class="col-auto"><h6>2017 to 2018</h6></div>
                                </div>
                             </div> 
                            </Accordion.Header>
                        <Accordion.Body>
                        <div class="container" id="expdetails">
                            <div class="row"> 
                        <p><b>MUFG</b> –  it is a banking and finance application that I have worked on. My responsibilities here
                        are UI design and support. I also worked on mapping of data from external applications and creating modules for the application. </p>
                        <p>I have deployed in Singapore to support the project for over a month.</p>
                              </div>
                          </div>
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                        <Accordion.Header>
                             <div class="container">
                                <div class="row">
                                    <div class="col-auto me-auto"><h6>Application Developer (PEGA) - DXC Philippines (Makati City, Philippines) </h6></div>
                                    <div class="col-auto"><h6>2014 to 2017</h6></div>
                                </div>
                             </div> 
                            </Accordion.Header>
                        <Accordion.Body>
                        <div class="container" id="expdetails">
                            <div class="row"> 
                        <p>This is my first working experience as an application developer using PEGA. </p>
                        <p>Our project is insurance built in PEGA, which is QBE that is also available in different countries like
                        HK, SG, MY and Australia. I have been part of project development and support.
                        </p>
                        <p><b>QBE Insurance </b>–  Mostly,I worked on UI, generating reports, data mapping, deployments, support
                        (BAU) and enhancements.
                        </p>
                        <p>Involves in Gatekeeping (Secures, creates, and promotes ruleset in DEV to PROD environment). </p>
                        <p>Make decisions and score performance against the business plan and individual
                        business objectives. Creates Technical Business Requirements Documents</p>                        
                        </div>
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Col>
    </Row>
</Container>
</div>
</div>
  );
};

export default workexperience;


const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
      <button
          type="button"
          style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
          onClick={decoratedOnClick}
      >
          {children}
      </button>
  );
}
