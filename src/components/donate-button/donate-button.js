import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import CancelModal from '../modals/cancel-modal';
import ErrorModal from '../modals/error-modal';
import SuccessModal from '../modals/success-modal';

const PaypalButton = (props) => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);

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
    if (getTotal() === 0)
      alert('Please add items to your cart before donating.');
    else handleShowError();
    console.debug(err);
  };

  const getTotal = () => {
    return props.toys * 30 + props.food * 50 + props.otherAmount;
  };

  console.debug('paypal donation amount: $' + getTotal());

  const handleDonation = async () => {
    try {
      return {
        purchase_units: [
          {
            amount: {
              value: getTotal(),
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: getTotal(),
                },
              },
            },
            items: [
              {
                name: 'Holiday Hope Fund',
                description:
                  "Donations benefit the Citizen Tribune's Holiday Hope Fund.",
                quantity: '1',
                unit_amount: {
                  currency_code: 'USD',
                  value: getTotal(),
                },
                category: 'DONATION',
              },
            ],
          },
        ],
      }
    } catch (err) {
      setError("failed to process donation");
      console.error("Donation error: ", err);
      throw err;
    }
  };

  return (
    <>
      <PayPalButtons
        style={{ color: 'silver', label: 'donate' }}
        fundingSource={'paypal'}
        forceReRender={[getTotal()]}
        createOrder={async (data, actions) => {
          const order = await handleDonation();
          return actions.order.create(order);
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order.capture();
            donationSubmitted();
            console.log("Donation successful: ", details)
          } catch (err) {
            setError("Failed to complete donation: ");
            console.error("Capture error:", err);
          }
        }}
        onError={(err) => donationError(err)}
        onCancel={() => donationCancelled()}
      />
      <SuccessModal
        showSuccess={showSuccess}
        handleCloseSuccess={handleCloseSuccess}
        clearDonations={clearDonations}
      />
      <CancelModal
        showCancel={showCancel}
        handleCloseCancel={handleCloseCancel}
      />
      <ErrorModal showError={showError} handleCloseError={handleCloseError} />
    </>
  );
};

const DonateButton = (props) => {
  return props.amount > 0 ? <PaypalButton {...props} /> : null;
};

export default DonateButton;
