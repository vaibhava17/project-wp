import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";

const AppFooter = (props) => {
  return (
    <>
      <div className="footer">
        
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-logo">
                <img src={logo} width="100" height="100" alt="logo" />
                <h4>Webpaage Technologies</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className="footer-links">
                <h4>Services</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Web Hosting</a>
                  </li>
                  <li>
                    <a href="#">Web Maintenance</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-links">
                <h4>About</h4>
                <ul className="list-unstyled ">
                  <li className="text-decoration-none">
                    <a href="#" >About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Our Partners</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className="footer-links">
                <h4>About</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Our Partners</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*         
        <div className="col mt-5 text-center">
        <br />
        </div>
        <div className="col d-flex">
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </div>
        <div className="col"></div>
        <div className="col"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
