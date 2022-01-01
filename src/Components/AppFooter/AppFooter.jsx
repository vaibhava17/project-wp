import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";

const AppFooter = (props) => {
  return (
    <>
      <div className="footer">
        
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 ">
              <div className="row justify-content-center">
              <div className="footer-logo col-12">
                <img src={logo} width="50" height="50" alt="logo" />
                <h6>Webpaage <span>Technologies</span></h6>

              </div>
              <hr />
              <div className="col-12 ">
                <ul className="list-unstyled list-group list-group-horizontal mx-auto">
                <li className="list-group-item"><i class="fab fa-instagram"></i></li>
                <li className="list-group-item"><i class="fab fa-facebook"></i></li>
                <li className="list-group-item"><i class="fab fa-github"></i></li>
                <li className="list-group-item"><i class="fab fa-linkedin-in"></i></li>
                <li className="list-group-item"><i class="fab fa-twitter"></i></li>
                </ul> </div>
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
