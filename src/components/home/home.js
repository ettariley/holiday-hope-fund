import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Fade from 'react-bootstrap/Fade';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './home.css';

function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>  
      <Container className="home text-center">
        <Row>
          <h3>The Citizen Tribune's</h3>
          <h2>Holiday Hope Fund</h2>
          <h4>Keeping the magic of Christmas alive in Hamblen County</h4>
          <p>Since 1983, the Holiday Hope Fund has provided toys for children and food baskets for lower income families and individuals during the Christmas holidays.
            HHF encompasses the Hamblen County Toy program, Presents for Pre-Teens, and Teen-Angels, providing toys and gifts for children ages 1-13. An estimated 2,000 families are served each year. 
          </p>
        </Row>
        <Row>
          <h3>How can you help?</h3>
          <ul>
            <li>
              <Link to="/about">Volunteer with us</Link>
            </li>
            <li>
              <Link to="/donate">Donate or Shop the Virtal Angel Tree</Link>
            </li>
            <li>Conduct a food or toy drive</li>
            <li>Host an Angel Tree at your business</li>
            <li>Adopt an Angel Tree card from a store or business in the area</li>
          </ul>
        </Row>
      </Container>
    </Fade>
  );
}

export default Home;