import React from "react";
import "./products-directory.styles.scss";
import { useParams } from "react-router-dom";
import ProductItem from "../product-item/product-item.component";

const ProductsDirectory = ({ products }) => {
  const { category } = useParams();
  const productsByCategory = products.filter((el) => el.category === category);

  return (
    <div className="products-directory">
        <h1>{category}</h1>
      {productsByCategory.map((el, i) => (
          <ProductItem key={i} {...el} type="product-item product-item-shop" />
      ))}
    </div>
  );
};

export default ProductsDirectory;
