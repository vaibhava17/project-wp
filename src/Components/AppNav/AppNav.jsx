import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";
// import navcss from "./AppNav.module.css";

const AppNav = (props) => {

  return (
    <>
    
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <div className="container"  >
                <Navbar.Brand href="#home">
                  <img src={logo} width="70" height="70" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                          
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
           
    </>
  );
};

export default AppNav;
