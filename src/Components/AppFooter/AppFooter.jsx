import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";
import styles from "./AppFooter.module.css";

const AppFooter = (props) => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styles.footer + ` pb-3 pt-5`}>
        <Container>
          <Row>
            <Col md={3} sm={6} className="pb-4">
              <Row>
                <Col className={styles.footerLogo + ` text-center`}>
                  <Image src={logo} width="100" height="100" alt="logo" />
                  <h5>
                    Webpaage <span>Technologies</span>
                  </h5>
                  <p>Delivering success with every solution.</p>
                </Col>
                <div className="w-100">
                  <hr />
                </div>
                <Col>
                  <ul className="list-unstyled justify-content-center list-group list-group-horizontal mx-auto">
                    <li className="list-group-item mx-1 rounded-circle align-self-center py-1 px-2">
                      <i class="fab fa-instagram"></i>
                    </li>
                    <li className="list-group-item mx-1 rounded-circle align-self-center py-1 px-2">
                      <i class="fab fa-facebook"></i>
                    </li>
                    <li className="list-group-item mx-1 rounded-circle align-self-center py-1 px-2">
                      <i class="fab fa-github"></i>
                    </li>
                    <li className="list-group-item mx-1 rounded-circle align-self-center py-1 px-2">
                      <i class="fab fa-linkedin-in"></i>
                    </li>
                    <li className="list-group-item mx-1 rounded-circle align-self-center py-1 px-2">
                      <i class="fab fa-twitter"></i>
                    </li>
                  </ul>{" "}
                </Col>
              </Row>
            </Col>
            <Col md={3} sm={6} className="mt-md-5 ps-md-5">
              <div className={styles.footerLinks}>
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
            </Col>
            <Col md={3} sm={6} className="mt-md-5 ps-md-5">
              <div className={styles.footerLinks}>
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
            </Col>
            <Col md={3} sm={6} className="mt-md-5 ps-md-5">
              <div className={styles.footerLinks}>
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
            </Col>
          </Row>
          <div className="text-center pt-2">
            <p>Copyright © Webpaage. All rights reserved {year}</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AppFooter;
