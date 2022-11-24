import React, { useEffect, useRef } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './cart.css';

const DonateButton = ({ currency, amount }) => {
  const amountRef = useRef(amount);

  const donationSubmitted = () => {
    alert("Donation successful! Thank you!");
    localStorage.clear();
  };

  const donationCancelled = () => {
    alert("We are so sad that you cancelled");
  };

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  return (
    <PayPalButtons
      style={{ color: "white", label: "donate" }}
      fundingSource={"paypal"}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: amountRef.current
                  }
                }
              },
              items: [
                {
                  name: "Holiday Hope Fund",
                  description:
                    "Donations benefit the Citizen Tribune's Holiday Hope Fund.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: currency,
                    value: amountRef.current
                  },
                  category: "DONATION"
                }
              ]
            }
          ]
        });
      }}
      onApprove={() => donationSubmitted()}
      onCancel={() => donationCancelled()}
    />
  );
};

function Cart(props) {
  const show = props.show;
  const toys = localStorage.getItem("toys") || 0;
  const food = localStorage.getItem("food") || 0 ;
  const otherAmount = localStorage.getItem("otherAmount") || 0;
  const { handleClose } = props;
  const navigate = useNavigate();

  const toyDonation = Number(toys) * 25;
  const foodDonation = Number(food) * 45;
  const totalDonation = Number(toyDonation) + Number(foodDonation) + Number(otherAmount);

  const returnToDonate = () => {
    navigate("/donate");
    handleClose();
  }
  
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "Aas4zEAuLX4YUnRUfetEzejdLHsijT9yYjRzsWdXMH3Pg1vUj_zMzuL8RO1xBE9ybfYTnaMOEjhZ_-lX",
        components: "buttons",
        currency: "USD",
      }}>
      <Offcanvas show={show} onHide={handleClose} placement="end" className="cart">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Toys: ${toyDonation}</p>
          <p>Food: ${foodDonation}</p>
          <p>Other Donation: ${otherAmount}</p>
          <p>Total: ${totalDonation}</p>

          <Button onClick={() => returnToDonate()}>
            Edit Cart
          </Button>
          <DonateButton currency="USD" amount={totalDonation} />
        </Offcanvas.Body>
      </Offcanvas>
    </PayPalScriptProvider>
    
  );
}

export default Cart;