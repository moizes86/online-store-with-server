import React, { useContext } from "react";

import "./cart-icon.styles.scss";

//CONTEXTS
import { CartContext } from "../../contexts/cart.provider";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { toggleHidden, itemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="items-count">{itemsCount}</span>
    </div>
  );
};



export default (CartIcon);
