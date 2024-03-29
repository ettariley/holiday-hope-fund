import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Cart from "../cart/cart";

function HeaderNav(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect bg="white" expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand display-6" to='/'>Holiday Hope Fund</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey='1' as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link eventKey='2' as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey='3' as={Link} to="/signups">
                Sign-Ups
              </Nav.Link>
              <Nav.Link eventKey='4' as={Link} to="/donate">
                Shop the Angel Tree
              </Nav.Link>
            </Nav>
            <Nav>
              <Button className="p-0 me-auto" variant="link" onClick={handleShow}>
                <i className="bi bi-gift-fill h4"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} {...props}/>
    </>
    
  );
}

export default HeaderNav;