import React, { useContext } from "react";

import "./cart-dropdown.styles.scss";

//CONTEXT
import { CartContext } from "../../contexts/cart.provider";

//
import { withRouter } from "react-router-dom";
//
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ history }) => {

  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((el, idx) => <CartItem key={idx} item={el} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
