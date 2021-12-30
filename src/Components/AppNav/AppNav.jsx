import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";
// import navcss from "./AppNav.module.css";

const AppNav = (props) => {

  return (
    <>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} width="100" height="100" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNav;
