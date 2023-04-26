import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Accordion from 'react-bootstrap/Accordion';

function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="mt-5">
        <h2 className="text-center pb-3 display-6">About</h2>
        <Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About the Holiday Hope Fund</Accordion.Header>
              <Accordion.Body>
                  Holiday Hope Fund was created over 40 years ago to ensure that all seniors, children, and families in
                  need in Hamblen County were remembered during the Holiday season. Central Services was designated
                  to be the local agency that managed the program to maintain accountability and prevent duplication of
                  services in Hamblen County. This massive undertaking could never be accomplished without the
                  support and generosity of this community and we are grateful for the opportunity to serve. If you are
                  interested in helping the Holiday Hope Fund campaign effort, below is a list of opportunities. If
                  you would like someone from Central Services to come and speak to your group or organization or if you
                  have any other questions, please contact our office at <a href="tel:+">423-586-9431</a>.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>About Central Services</Accordion.Header>
              <Accordion.Body>
                <a href="https://www.mhcentralservices.org/" target="_blank">Morristown-Hamblen Central Services</a> has been serving Hamblen County residents for over 50 years. A community-funded, community-focused agency, Central Services provides a food pantry, emergency rent & utility services, a thrift store, and many other programs. We love to partner with other agencies to provide the best services to our neighbors.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Our Sponsors</Accordion.Header>
              <Accordion.Body>
                <a href="https://www.citizentribune.com/" target="_blank">The Citizen Tribune</a>
                <br></br>
                <a href="https://www.easttennesseefoundation.org" target="_blank">Laura J. Kress Angel Tree Fund - East Tennessee Foundation</a>
                <br></br>
                <a href="https://www.varietytn.org/" target="_blank">Variety - the Children's Charity of Eastern Tennessee</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Volunteers</Accordion.Header>
              <Accordion.Body>
                We welcome volunteers of all ages throughout the Christmas season!
                <h6>Volunteer Opportunities:</h6>
                <ul>
                  <li>Preparing for and Packing "Santa's Sleigh"</li>
                  <li>Distributing toys and food</li>
                  <li>Assisting with other agency program areas during the holiday season</li>
                </ul>
                <h6>Please contact Central Serivces's office at <a href="tel:+">423-586-9431</a> to schedule a time to volunteer.</h6>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Participants</Accordion.Header>
              <Accordion.Body>
                Sign ups to receive food and/or toys have closed. If you're already signed up and have questions, please contact our office at <a href="tel:+">423-586-9431</a>.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;