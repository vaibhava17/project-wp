import React from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";
import AppButton from "../AppButton/AppButton";
// import navcss from "./AppNav.module.css";

const AppNav = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">
            <Image src={logo} width="70" height="70" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#features" className="align-self-center">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="align-self-center">
                About
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="navbarScrollingDropdown"
                className="align-self-center"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets" className="align-self-center">
                Contact
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="align-self-center"
              ></Nav.Link>
              <Nav.Link>
                <AppButton
                  label={"Get a Quote"}
                  withBg
                  className={"border-0 rounded-pill"}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNav;
