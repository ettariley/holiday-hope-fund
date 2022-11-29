import React from "react";
import './footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <div className="footer-grid">
          <div className="g1">
            <h4>The Holiday Hope Fund</h4>
            <p>Keep the magic of Christmas alive for all our neighbors in Hamblen County!</p>
            <div className="footer-social">
                <a href="https://www.facebook.com/mhcentralservices" target="_blank" rel="noreferrer"><i className="bi bi-facebook h3 p-1"></i></a>
                <a href='mailto:mhcentralservicesinc@gmail.com'><i className="bi fi bi-envelope-fill h2 p-1"></i></a>
                <a href='tel:+14235869431'><i className="bi fi bi-telephone-fill h3 p-1"></i></a>
            </div>
          </div>
          <div className="g2">
            <h4>Location</h4>
            <Row>
              <Col>
                <div className="location-grid">
                  <div className="l1">
                    <h6>Address</h6>
                    <p>2450 S. Cumberland St.<br></br>
                    Morristown, TN 37813</p>
                  </div>
                  <div className="l2">                        
                    <h6>Mailing Address</h6>
                    <p>PO Box 1622<br></br>
                    Morristown, TN 37816</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="g3">
            <div className="contact-grid">   
              <div>
                <h4>Contact</h4>          
                <div>                        
                  <h6>Phone</h6>
                  <a href="tel:+14235869431">423-586-9431</a>
                </div>           
                <div>                        
                  <h6>Email</h6>
                  <a href="mailto:mhcentralservicesinc@gmail.com">mhcentralservicesinc@gmail.com</a>
                </div>
              </div>
              <div className="links">                    
                <h4>Links</h4>
                <Row>
                  <Col>              
                  <Nav.Link className="link" eventKey='1' as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="link" eventKey='2' as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link className="link" eventKey='3' as={Link} to="/donate">
                    Shop the Angel Tree
                  </Nav.Link>
                  </Col>  
                </Row>  
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer-etta">
        <i className="bi bi-c-circle"></i> 2022 Etta Haselden
      </div>
    </div>
  );
}

export default Footer;