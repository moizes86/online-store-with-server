import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.provider";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { title, image, price, quantity } = item;
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div
        className="background-image-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="details">
        <span className="title">{title}</span>
        <span className="price">
          {price}$ x {quantity}
        </span>
      </div>
      <div className="item-quantity">
        <div className="arrow" onClick={()=>removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItem(item)}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default CartItem;
