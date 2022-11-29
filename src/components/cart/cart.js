import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import './cart.css';
import DonateButton from '../donate-button/donate-button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OtherAmountCard = ({type, img, amount, setter}) => {
  return (
    <div className="donation-card">
      <div className="donation-card-img">
        <img src={img} alt="Donation"></img>
      </div>
      <div className="donation-card-body">
        <h5 className="donation-card-title">{type}</h5>      
        <Form.Group
          as={Row}
          controlId="formOtherDonationAmount"
          className="m-2">
          <Col>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => {
                    const int = parseInt(e.target.value, 10);
                    setter(int > 0 ? int : 0);
                  }
                }
                placeholder="Enter Amount"
              />
            </InputGroup>
          </Col>
        </Form.Group>
      </div>
    </div>
  );
};

const DonationAmountCard = ({type, img, amount, donationText, increase, decrease}) => {  
  return (
    <div className="donation-card">
      <div className="donation-card-img">
        <img src={img} alt="Donation"></img>
      </div>
      <div className="donation-card-body">
        <h5 className="donation-card-title">{type}</h5>     
        <h6>{donationText}</h6> 
        <ListGroup horizontal className="m-2 justify-content-center">             
          <ListGroup.Item
            action
            onClick={() => decrease(amount)}
            className="w-auto">
            <i className="bi bi-dash"></i>
          </ListGroup.Item>        
          <ListGroup.Item>{amount}</ListGroup.Item>   
          <ListGroup.Item
            action
            onClick={(e) => increase(amount)}
            className="w-auto">
            <i className="bi bi-plus"></i>
          </ListGroup.Item>            
        </ListGroup>
      </div>
    </div>
  );
};

const DonationCard = ({img, type, amount, setter}) => {

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
      setter(amount);
      saveToLocalStorage(type, amount);
    }
  };
  const increase = (amount) => {
    amount++;
    setter(amount);
    saveToLocalStorage(type, amount);
  };

  const saveOtherAmount = (amount) => {
    setter(amount);
    saveToLocalStorage(type, amount);
  }

  const donationText = (type) => {
    switch(type) {
      case "Toys": return "$25 Donation";
      case "Food": return "$45 Donation";
      default: return "";
    }
  }

  return type === "Other Amount" ? 
    <OtherAmountCard type={type} img={img} amount={amount} setter={saveOtherAmount} /> :
    <DonationAmountCard type={type} img={img} amount={amount} donationText={donationText(type)} decrease={decrease} increase={increase} />;
}

function Cart(props) {
  const show = props.show;
  const { handleClose } = props;

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

  return (
      <Offcanvas show={show} onHide={handleClose} placement="end" className="cart">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="display-6">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>              
          <CardGroup className="donation-card-group">
            <DonationCard img={require('../../assets/gift.jpeg')} type="Toys" amount={props.toys} setter={props.setToys} />
            <DonationCard img={require('../../assets/food.jpeg')} type="Food" amount={props.food} setter={props.setFood}/>
            <DonationCard img={require('../../assets/donate.jpeg')} type="Other Amount" amount={props.otherAmount} setter={props.setOtherAmount}/>
          </CardGroup>
          <Row className="bg-light text-center rounded p-2 mt-4 ms-auto me-auto">
            <Col>
              <h5 className="mb-1">Total: ${getTotal()}</h5>
              <DonateButton amount={getTotal()} {...props} />
              <Button className='mt-1' variant="outline-primary" onClick={() => clearCart()}>
                Clear Cart
              </Button>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>    
  );
}

export default Cart;