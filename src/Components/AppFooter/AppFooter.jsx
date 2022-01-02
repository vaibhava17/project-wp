import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";

const AppFooter = (props) => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer p-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 pb-4">
              <div className="row">
                <div className="footer-logo text-center col">
                  <img src={logo} width="100" height="100" alt="logo" />
                  <h5>
                    Webpaage <span>Technologies</span>
                  </h5>
                  <p>Delivering success with every solution.</p>
                </div>
                <div className="w-100">
                  <hr />
                </div>
                <div className="col ">
                  <ul className="list-unstyled justify-content-center list-group list-group-horizontal mx-auto">
                    <li className="list-group-item">
                      <i class="fab fa-instagram"></i>
                    </li>
                    <li className="list-group-item">
                      <i class="fab fa-facebook"></i>
                    </li>
                    <li className="list-group-item">
                      <i class="fab fa-github"></i>
                    </li>
                    <li className="list-group-item">
                      <i class="fab fa-linkedin-in"></i>
                    </li>
                    <li className="list-group-item">
                      <i class="fab fa-twitter"></i>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-md-5 ps-md-5">
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
            <div className="col-md-3 col-sm-6 mt-md-5 ps-md-5">
              <div className="footer-links">
                <h4>About</h4>
                <ul className="list-unstyled ">
                  <li className="text-decoration-none">
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
            <div className="col-md-3 col-sm-6 mt-md-5 ps-md-5">
              <div className="footer-links">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/RJAmPm3zKdZJjQZ57"
                      target="_blank"
                    >
                      503, Civil Lines, Bareilly - 243001
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@webpaage.in">Contact@webpaage.in</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p>Copyright © Webpaage. All rights reserved {year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
