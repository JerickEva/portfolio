import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" id="navbar" >
    <Container id="navtext">
      <NavLink className="nav-item nav-link" to="/"><h4 >Jerick Eva</h4></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
          <NavLink className="nav-item nav-link" to="/corepage"><h4 >vita</h4></NavLink> 
          {/* <NavLink className="nav-item nav-link" to="/downloadcv"><h4>Download CV</h4></NavLink>  */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
