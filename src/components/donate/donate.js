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

/**
 * img
 * title
 * text
 * amount
 * type
 * otherSetter
 */
function OtherCard(props) {
  return (
    <Card className='card-col'>
      <Card.Img
        variant="top"
        src={props.img}
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
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
                value={props.amount}
                onChange={(e) => props.otherSetter(e)
                }
                placeholder="Enter Amount"
              />
            </InputGroup>
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  )
}

/**
 * img
 * title
 * subtitle
 * text
 * amount
 * type
 * increase
 * decrease
 */
function FoodToysCard(props) {
  return (
    <Card className='card-col'>
      <Card.Img
        variant="top"
        src={props.img}
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <Card.Text className='pt-2'>
          {props.text}
        </Card.Text>
        <ListGroup horizontal className="m-2 justify-content-center">
          <ListGroup.Item
            action
            onClick={() => props.decrease(props.amount)}
            className="w-auto"
          >
            <i className="bi bi-dash"></i>
          </ListGroup.Item>
          <ListGroup.Item>{props.amount}</ListGroup.Item>
          <ListGroup.Item
            action
            onClick={(e) => props.increase(props.amount)}
            className="w-auto"
          >
            <i className="bi bi-plus"></i>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

function DonationCard(props) {  

  const saveToLocalStorage = (type, amount) => {
    switch(type) {
      case "Toys": localStorage.setItem('toys', amount); break;
      case "Food": localStorage.setItem('food', amount); break;
      case "Other Amount": localStorage.setItem('otherAmount', amount); break;
      default: break;
    }
  }

  const decrease = (amount) => {
    if (amount > 0) {
      amount--;
      props.setter(amount);
      saveToLocalStorage(props.type, amount);
    }
  };
  const increase = (amount) => {
    amount++;
    props.setter(amount);
    saveToLocalStorage(props.type, amount);
  };

  const saveOtherAmount = (e) => {
    const amount = e.target.value;
    props.setter(amount);
    saveToLocalStorage(props.type, amount);
  }

  return props.type === "Other Amount" ? 
    <OtherCard otherSetter={saveOtherAmount} {...props} /> : 
    <FoodToysCard decrease={decrease} increase={increase} {...props} />
}

function Donate(props) {
  const [open, setOpen] = useState(false);

  const clearCart = () => {
    props.setToys(0);
    props.setFood(0);
    props.setOtherAmount(0);
    localStorage.removeItem('toys');
    localStorage.removeItem('food');
    localStorage.removeItem('otherAmount');
  };
  
  const getTotal = () => {
    return (Number(props.toys) * 30) + 
           (Number(props.food) * 50) + 
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
            <DonationCard 
              img={require('../../assets/gift.jpeg')} 
              type="Toys"
              title="Sponsor a Child's Toys" 
              subtitle="$30.00 Donation" 
              text="Help us fulfill a local child's Christmas wish. We'll take care of the shopping for you!" 
              amount={props.toys}
              setter={props.setToys} />            
          </Col>
          {/* Food box card */}
          <Col xs='12' md='4' className='mt-2 mb-2'>
            <DonationCard 
              img={require('../../assets/food.jpeg')} 
              type="Food"
              title="Sponsor a Food Box" 
              subtitle="$50.00 Donation" 
              text="We partner with local grocery stores to provide the makings of a delicious Christmas dinner." 
              amount={props.food}
              setter={props.setFood} />              
          </Col>
          {/* donate any amount card */}
          <Col xs='12' md='4' className='card-col mt-2 mb-2'>
            <DonationCard 
              img={require('../../assets/donate.jpeg')} 
              type="Other Amount"
              title="Donate a Custom Amount" 
              text="A donation of any size, large or small, helps us reach our fundraising goal!" 
              amount={props.otherAmount}
              setter={props.setOtherAmount} />  
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
