import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = ({ currency, amount }) => {

    const donationSubmitted = () => {
      alert("Donation successful! Thank you!");
      localStorage.clear();
    };
  
    const donationCancelled = () => {
      alert("We are so sad that you cancelled");
    };
  
    const donationError = (err) => {
      if (amount === 0) alert("Please add items to your cart before donating.");
      else alert("An error occurred while processing your donation. Please try again.");
      console.debug(err);
    };
  
    return amount > 0 ? (        
        <PayPalScriptProvider
            options={{
            "client-id": "Aas4zEAuLX4YUnRUfetEzejdLHsijT9yYjRzsWdXMH3Pg1vUj_zMzuL8RO1xBE9ybfYTnaMOEjhZ_-lX",
            components: "buttons",
            currency: "USD",
            }}>
            <PayPalButtons
                style={{ color: "white", label: "donate" }}
                fundingSource={"paypal"}
                createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                    {
                        amount: {
                        value: amount,
                        breakdown: {
                            item_total: {
                            currency_code: currency,
                            value: amount
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
                            value: amount
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
    ) : null;
  };

  
export default DonateButton;