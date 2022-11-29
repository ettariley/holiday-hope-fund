import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import './about.css';

function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="about text-center">
        <h2>About</h2>
        <Row>
          <Col>
            <h3>About the Holiday Hope Fund</h3>
            <p>Holiday Hope Fund was created over 40 years ago to ensure that all seniors, children, and families in
              need in Hamblen County were remembered during the Holiday season. Central Services was designated
              to be the local agency that managed the program to maintain accountability and prevent duplication of
              services in Hamblen County. This massive undertaking could never be accomplished without the
              support and generosity of this community and we are grateful for the opportunity to serve. If you are
              interested in helping the Holiday Hope Fund campaign effort, below is a list of opportunities. If
              you would like someone from Central Services to come and speak to your group or organization or if you
              have any other questions, please contact our office at 423-586-9431.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Volunteers</h3>
            <p>We welcome volunteers of all ages throughout the Christmas season!</p>
            <h5>Volunteer Opportunities:</h5>
            <ul>
              <li>Preparing for and Packing "Santa's Sleigh"</li>
              <li>Distributing toys and food</li>
              <li>Assisting with other agency program areas during the holiday season</li>
            </ul>
            <h6>Please contact Central Serivces's office at <a href="tel:+">423-586-9431</a> to schedule a time to volunteer.</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>About Central Services</h3>
            <p><a href="https://www.mhcentralservices.org/" target="_blank">Morristown-Hamblen Central Services</a> has been serving Hamblen County residents for over 50 years. A community-funded, community-focused agency, Central Services provides a food pantry, emergency rent & utility services, a thrift store, and many other programs. We love to partner with other agencies to provide the best services to our neighbors.</p>
          </Col>
          <Col>
            <h3>Our Sponsors</h3>
            <h6><a href="https://www.citizentribune.com/">The Citizen Tribune</a></h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Participants</h3>
            <p>Info goes here.</p>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;