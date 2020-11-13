import React, { useContext } from "react";
import "./product-item.styles.scss";

//
import { Link } from "react-router-dom";

//CONTEXT
import { CartContext } from "../../contexts/cart.provider";

import CustomButton from "../custom-button/custom-button.component";

const ProductItem = ({ item, class_type }) => {
  const { category, description, image, price, title, id } = item;

  const { addItem } = useContext(CartContext);

  return (
    <div className={class_type}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="content">
        {class_type.includes("product-item-carousel") ? (
          <Link to={`shop/${category}/${id}`}>
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
          <CustomButton onClick={() => addItem(item)}>
            {" "}
            ADD TO CART{" "}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
