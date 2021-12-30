import React from "react";
import { Col, Row } from "react-bootstrap";

const AppFooter = (props) => {
  return (
    <>
      <div className="footer bg-warning">
        <div className="footer-top">
          <Row className="m-0">
            <Col sm={6} lg={3}>
              hi
            </Col>
            <Col sm={6} lg={3}>
              hi
            </Col>
            <Col sm={6} lg={3}>
              hi
            </Col>
            <Col sm={6} lg={3}>
              hi
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <Row className="m-0">
            <Col lg={6}>
              hi
            </Col>
            <Col lg={6}>
              hi
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
