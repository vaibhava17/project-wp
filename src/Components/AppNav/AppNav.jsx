import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Container,
} from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";
import AppButton from "../AppButton/AppButton";
import navcss from "./AppNav.module.css";

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
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
<<<<<<< HEAD
              <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
=======
              <NavDropdown title="Service" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
>>>>>>> 42c5e243ba868fecfe47f374230a88c54cf26759
              <Nav.Link href="#deets">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
              <Nav.Link >
                <AppButton label={"Login"} withBg className={"border-0 rounded-pill"} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      
    </>
  );
};

export default AppNav;
