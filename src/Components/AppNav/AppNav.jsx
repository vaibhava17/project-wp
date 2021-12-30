import React from "react";
import { Navbar, Nav, NavDropdown, Image, Container, Button } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";
import navcss from "./AppNav.module.css";

const AppNav = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">
            <img src={logo} width="70" height="70" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Service" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
              <Nav.Link href="#deets">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
              
            </Nav>
            <Button variant="info" className="btn-grad">Login</Button >{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNav;
