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

  const decreaseToys = () => {
    if (props.toys > 0) {
      props.setToys(Number(props.toys) - 1);
      localStorage.setItem('toys', props.toys);
    }
  };

  const increaseToys = () => {
    props.setToys(Number(props.toys) + 1);
    localStorage.setItem('toys', props.toys);
  };

  const decreaseFood = () => {
    if (props.food > 0) {
      const amount = Number(props.food) - 1;
      props.setFood(amount);
      localStorage.setItem('food', amount);
    }
  };

  const increaseFood = () => {
    const amount = Number(props.food) + 1;
    props.setFood(amount);
    localStorage.setItem('food', amount);
  };

  const setOtherAmount = (e) => {    
    const amount = parseInt(e.target.value, 10);
    const final = amount > 0 ? amount : 0;
    props.setOtherAmount(final);
    localStorage.setItem('otherAmount', final);    
  };

  const clearCart = () => {
    props.setToys(0);
    props.setFood(0);
    props.setOtherAmount(0);
    localStorage.removeItem('toys');
    localStorage.removeItem('food');
    localStorage.removeItem('otherAmount');
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
      <Container className="text-center mt-5">
        <h2 className='display-6'>Shop the Angel Tree</h2>
        <p className='fs-5 ps-5 pe-5'>If you prefer to do your Christmas shopping online, you've come to the right place! Shop our virtual Angel Tree as a donation to the Holiday Hope Fund.</p>
        <Row>
          {/* Toy card */}
          <Col xs='12' md='4' className='mt-2 mb-2'>
            <Card className='card-col'>
              <Card.Img
                variant="top"
                src={require('../../assets/gift.jpeg')}
              />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Sponsor a Child's Toys</Card.Title>
                <Card.Subtitle>$25.00 Donation</Card.Subtitle>
                <Card.Text className='pt-2'>
                  Help us fulfill a local child's Christmas wish. We'll take care of the shopping for you!
                </Card.Text>
                <ListGroup horizontal className="m-2 justify-content-center">
                  <ListGroup.Item
                    action
                    onClick={() => decreaseToys()}
                    className="w-auto"
                  >
                    <i className="bi bi-dash"></i>
                  </ListGroup.Item>
                  <ListGroup.Item>{props.toys}</ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={(e) => increaseToys()}
                    className="w-auto"
                  >
                    <i className="bi bi-plus"></i>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* Food box card */}
          <Col xs='12' md='4' className='mt-2 mb-2'>
            <Card className='card-col'>
              <Card.Img
                variant="top"
                src={require('../../assets/food.jpeg')}
              />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Sponsor a Food Box</Card.Title>
                <Card.Subtitle>$45.00 Donation</Card.Subtitle>
                <Card.Text className='pt-2'>
                  We partner with local grocery stores to provide the makings of a delicious Christmas dinner.
                </Card.Text>
                <ListGroup horizontal className="m-2 justify-content-center">
                  <ListGroup.Item
                    action
                    onClick={() => decreaseFood()}
                    className="w-auto"
                  >
                    <i className="bi bi-dash"></i>
                  </ListGroup.Item>
                  <ListGroup.Item>{props.food}</ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => increaseFood()}
                    className="w-auto"
                  >
                    <i className="bi bi-plus"></i>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* donate any amount card */}
          <Col xs='12' md='4' className='card-col mt-2 mb-2'>
            <Card className='card-col'>
              <Card.Img
                variant="top"
                src={require('../../assets/donate.jpeg')}
              />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>Donate a Custom Amount</Card.Title>
                <Card.Text>
                  A donation of any size, large or small, helps us reach our fundraising goal!
                </Card.Text>
                <Form.Group
                  as={Row}
                  controlId="formOtherDonationAmount"
                  className="m-2">
                  <Col>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        type="number"
                        value={props.otherAmount}
                        onChange={(e) => setOtherAmount(e)
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
        <Row className="bg-light rounded p-2 mt-4 ms-auto me-auto">
          <Col>
            <h2>Total: ${getTotal()}</h2>
            <DonateButton amount={getTotal()} {...props} />
            <Button className='mt-1' variant="outline-primary" onClick={() => clearCart()}>
              Clear Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Donate;
