import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from '../cart/cart';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './donate.css';

function Donate() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [toys, setToys] = useState(localStorage.getItem('toys'));
  const [food, setFood] = useState(localStorage.getItem('food'));
  const [otherAmount, setOtherAmount] = useState(
    localStorage.getItem('otherAmount')
  );
  // let toys = parseInt(localStorage.getItem("toys"));
  // let food = parseInt(localStorage.getItem("food"));
  // let otherAmount = parseInt(localStorage.getItem("otherAmount"));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const decreaseToys = (toys) => {
    if (toys > 0) {
      setToys(parseInt(toys) - 1);
    }
  };

  const increaseToys = (toys) => {
    setToys(parseInt(toys) + 1);
  };

  const decreaseFood = (food) => {
    if (food > 0) {
      setFood(parseInt(food) - 1);
    }
  };

  const increaseFood = (food) => {
    setFood(parseInt(food) + 1);
  };

  const addToCart = (toys, food, otherAmount) => {
    localStorage.setItem('toys', toys);
    localStorage.setItem('food', food);
    localStorage.setItem('otherAmount', otherAmount);
    handleShow();
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
                    onClick={() => decreaseToys(toys)}
                    className="w-auto"
                  >
                    <i class="bi bi-dash"></i>
                  </ListGroup.Item>
                  <ListGroup.Item>{toys}</ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={(e) => increaseToys(toys)}
                    className="w-auto"
                  >
                    <i class="bi bi-plus"></i>
                  </ListGroup.Item>
                </ListGroup>
                {toys > 0 ? (
                  <Button
                    variant="primary"
                    onClick={(e) => addToCart(toys, food, otherAmount)}
                    className="mt-2"
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button disabled variant="primary" className="mt-2">
                    Add to Cart
                  </Button>
                )}
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
                    onClick={() => decreaseFood(food)}
                    className="w-auto"
                  >
                    <i class="bi bi-dash"></i>
                  </ListGroup.Item>
                  <ListGroup.Item>{food}</ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => increaseFood(food)}
                    className="w-auto"
                  >
                    <i class="bi bi-plus"></i>
                  </ListGroup.Item>
                </ListGroup>
                {food > 0 ? (
                  <Button
                    variant="primary"
                    onClick={(e) => addToCart(toys, food, otherAmount)}
                    className="mt-2"
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button disabled variant="primary" className="mt-2">
                    Add to Cart
                  </Button>
                )}
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
                  className="m-2"
                >
                  <Form.Label column sm="auto">
                    Amount:
                  </Form.Label>
                  <Col>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        type="number"
                        value={parseInt(otherAmount)}
                        onChange={(e) =>
                          setOtherAmount(parseInt(e.target.value))
                        }
                        placeholder="Enter Amount"
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>
                {otherAmount > 0 ? (
                  <Button
                    variant="primary"
                    onClick={(e) => addToCart(toys, food, otherAmount)}
                    className="ms-auto me-auto mt-2"
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button variant="primary" className="mt-2" disabled>
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3 pb-3">
          <Col>
            <Button variant="primary" size="lg" onClick={handleShow}>
              View Cart
            </Button>
          </Col>
        </Row>
        <Cart show={show} handleClose={handleClose} />
      </Container>
    </Fade>
  );
}

export default Donate;
