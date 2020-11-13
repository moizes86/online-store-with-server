import React from "react";
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_dOnBryaVClNKB1ptCjEeExMP00qHYoq881";

  const onToken = (token) => {
    axios({
      url:'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error: ' + error);
      alert('Something Went Wrong')
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Online Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;