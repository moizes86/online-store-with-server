import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { CartContext } from "../../contexts/cart.provider";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, totalValue } = useContext(
    CartContext
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-blocks">
          <span>Product</span>
        </div>
        <div className="header-blocks description">
          <span>Description</span>
        </div>
        <div className="header-blocks quantity">
          <span>Quantity</span>
        </div>
        <div className="header-blocks price">
          <span>Price</span>
        </div>
        <div className="header-blocks remove">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalValue}</span>
      </div>

      <StripeCheckoutButton className="button" price={totalValue} />

      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242
        <br />
        Date: any
        <br />
        CVV: any
        <br />
      </div>
    </div>
  );
};

export default CheckoutPage;
