import React from "react";
import "./product-item.styles.scss";

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from "../custom-button/custom-button.component";

const ProductItem = ({addItem, item, type }) => {
  const { category, description, image, price, title} = item;
  return (
    <div className={type}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="content">
        
        {type.includes("product-item-carousel") ? (
          <Link to={`shop/${category}/${title}`}>
            <div className="details">
              <h3 className="title">{title}</h3>
              <span className="description">{description} </span>
            </div>
          </Link>
        ) : (
          <div className="details">
            <h3 className="title">{title}</h3>
            <span className="description">{description} </span>
          </div>
        )}

        <div className="price-and-btn">
          <span className="price">{price}$</span>
          <CustomButton onClick={()=>addItem(item)}> ADD TO CART </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
addItem: item=> dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(ProductItem);
