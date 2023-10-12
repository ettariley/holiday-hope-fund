import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image';

function Signups() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="mt-5">
        <h2 className="text-center pb-3 display-6">Sign Up Flyers</h2>
        <Row>
          <Col lg='6' className="pb-4">
            <Image fluid src={require('../../assets/HHF_Sign_Up.png')} thumbnail />
          </Col>
          <Col lg='6'>
            <Image fluid src={require('../../assets/HHF_Sign_Up_Espanola.png')} thumbnail />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Signups;