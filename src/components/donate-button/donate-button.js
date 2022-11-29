import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import CancelModal from "../modals/cancel-modal";
import ErrorModal from "../modals/error-modal";
import SuccessModal from "../modals/success-modal";

const PaypalButton = (props) => {  
  console.log(props.amount);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const handleCloseCancel = () => setShowCancel(false);
  const handleShowCancel = () => setShowCancel(true);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const clearDonations = () => {
    localStorage.clear();
    props.setFood(0);
    props.setToys(0);
    props.setOtherAmount(0);
  };

  const donationSubmitted = () => {
    handleShowSuccess();
  };

  const donationCancelled = () => {
    handleShowCancel();
  };

  const donationError = (err) => {
    if (props.amount === 0) alert("Please add items to your cart before donating.");
    else handleShowError();
    console.debug(err);
  };

  console.debug('paypal donation amount: $' + props.amount);

  return (
    <>
      <PayPalScriptProvider
          options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
          components: "buttons",
          currency: "USD",
          }}>
          <PayPalButtons
              style={{ color: "silver", label: "donate" }}
              fundingSource={"paypal"}
              createOrder={(data, actions) => {
              return actions.order.create({
                  purchase_units: [
                  {
                      amount: {
                      value: props.amount,
                      breakdown: {
                          item_total: {
                          currency_code: "USD",
                          value: props.amount
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
                          currency_code: "USD",
                          value: props.amount
                          },
                          category: "DONATION"
                      }
                      ]
                  }
                  ]
              });
              }}
              onApprove={() => donationSubmitted()}
              onError={(err) => donationError(err)}
              onCancel={() => donationCancelled()}
          />
      </PayPalScriptProvider>
      <SuccessModal showSuccess={showSuccess} handleCloseSuccess={handleCloseSuccess} clearDonations={clearDonations} />
      <CancelModal showCancel={showCancel} handleCloseCancel={handleCloseCancel} />
      <ErrorModal showError={showError} handleCloseError={handleCloseError} />
    </>        
  );
};

const DonateButton = (props) => {  
    return props.amount > 0 ? (<PaypalButton {...props} />) : null;
};
  
export default DonateButton;