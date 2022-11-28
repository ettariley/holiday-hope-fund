import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import DonateButton from '../donate-button/donate-button';
import Button from 'react-bootstrap/Button';
import './donate.css';

function Donate(props) {
  const [open, setOpen] = useState(false);

  const decreaseToys = (toys) => {
    if (toys > 0) {
      const amount = Number(toys) - 1;
      props.setToys(amount);
      localStorage.setItem('toys', amount);
    }
  };

  const increaseToys = (toys) => {
    const amount = Number(toys) + 1;
    props.setToys(amount);
    localStorage.setItem('toys', amount);
  };

  const decreaseFood = (food) => {
    if (food > 0) {
      const amount = Number(food) - 1;
      props.setFood(amount);
      localStorage.setItem('food', amount);
    }
  };

  const increaseFood = (food) => {
    const amount = Number(food) + 1;
    props.setFood(amount);
    localStorage.setItem('food', amount);
  };

  const clearCart = () => {
    props.setToys(0);
    props.setFood(0);
    props.setOtherAmount(0);
    localStorage.clear();
  };
  
  const getTotal = () => {
    return (Number(props.toys) * 25) + 
           (Number(props.food) * 45) + 
           Number(props.otherAmount);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="donate text-center">
        <h2>Shop the Angel Tree</h2>
        <Row>
          {/* Toy card */}
          <Col>
            <Card className='card-col'>
              <Card.Img
                variant="top"
                src={require('../../assets/gift-preview.jpeg')}
              />
              <Card.Body>
                <Card.Title>Sponsor a Child's Toys</Card.Title>
                <Card.Subtitle>$25.00 Donation</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup horizontal className="m-2 justify-content-center">
                  <ListGroup.Item
                    action
                    onClick={() => decreaseToys(props.toys)}
                    className="w-auto"
                  >
                    <i className="bi bi-dash"></i>
                  </ListGroup.Item>
                  <ListGroup.Item>{props.toys}</ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={(e) => increaseToys(props.toys)}
                    className="w-auto"
                  >
                    <i className="bi bi-plus"></i>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* Food box card */}
          <Col>
            <Card className='card-col'>
              <Card.Img
                variant="top"
                src={require('../../assets/food-preview.jpeg')}
              />
              <Card.Body>
                <Card.Title>Sponsor a Food Box</Card.Title>
                <Card.Subtitle>$45.00 Donation</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup horizontal className="m-2 justify-content-center">
                  <ListGroup.Item
                    action
                    onClick={() => decreaseFood(props.food)}
                    className="w-auto"
                  >
                    <i className="bi bi-dash"></i>
                  </ListGroup.Item>
                  <ListGroup.Item>{props.food}</ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => increaseFood(props.food)}
                    className="w-auto"
                  >
                    <i className="bi bi-plus"></i>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* donate any amount card */}
          <Col className='card-col'>
            <Card className='card-col'>
              <Card.Img
                variant="top"
                src={require('../../assets/donate-preview.jpeg')}
              />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Donate a Custom Amount</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Form.Group
                  as={Row}
                  controlId="formOtherDonationAmount"
                  className="m-2">
                  <Form.Label column sm="auto">
                    Amount:
                  </Form.Label>
                  <Col>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        type="number"
                        value={parseInt(props.otherAmount)}
                        onChange={(e) => {
                            const amount = parseInt(e.target.value, 10);
                            const final = amount > 0 ? amount : 0;
                            props.setOtherAmount(final);
                            localStorage.setItem('otherAmount', final);
                          }
                        }
                        placeholder="Enter Amount"
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="total-row">
            <div className="cart-total">
              <h2>Total: ${getTotal()}</h2>
              <Button onClick={() => clearCart()}>
                Clear Cart
              </Button>
            </div>
            <DonateButton currency="USD" amount={getTotal()} />
        </Row>
      </Container>
    </Fade>
  );
}

export default Donate;
