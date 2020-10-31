import React from "react";

import "./cart-item.styles.scss";

import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";

const CartItem = ({ item, dispatch }) => {
  const { title, image, price, quantity } = item;

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
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default connect()(CartItem);
