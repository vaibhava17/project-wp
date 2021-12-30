import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/images/logo/logo.png";

const AppFooter = (props) => {
  return (
    <>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col mt-5 text-center">
        <img src={logo} width="100" height="100" alt="logo" />
        <br />
        <h4>Webpaage Technologies</h4>
        </div>
        <div className="col dflex align-self-center">
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  </div>
    </>
  );
};

export default AppFooter;
