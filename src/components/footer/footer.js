import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container className="border-top border-success">
      <Row className="pt-1">
        {/* FB and Email here */}
        <Col md="3">
          <a href="https://www.facebook.com/mhcentralservices" target="_blank" rel="noreferrer"><i className="bi bi-facebook h1 p-1"></i></a>
          <a href='mailto:mhcentralservicesinc@gmail.com' target="_blank" rel="noreferrer"><i className="bi fi bi-envelope-fill h1 p-1"></i></a>
        </Col>
        {/* contact */}
        <Col md="6" className="text-center">
          <h4>Contact</h4>
          {/* phone */}
          <Row>
            <Col>
              <h5>Phone</h5>
              <a href="tel:+">423-586-9431</a>
            </Col>
            {/* address */}
            <Col>
              <h5>Address</h5>
              2450 S. Cumberland St.<br></br>
              Morristown, TN 37813
            </Col>
            {/* mailing address */}
            <Col>
              <h5>Mailing Address</h5>
              PO Box 1622<br></br>
              Morristown, TN 37816
            </Col>
          </Row>
        </Col>
        {/* to the top option */}
        <Col md="3" className="text-end">
          <i className="bi bi-arrow-up-circle-fill h1"></i>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        {/* my info */}
        <Col sm="4" className="border-top border-primary text-center align-items-center pt-2 pb-2">
            <div>
              <i className="bi bi-c-circle"></i> 2022 Etta Haselden
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;