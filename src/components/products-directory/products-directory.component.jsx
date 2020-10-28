import React from "react";
import "./products-directory.styles.scss";
import { useParams } from "react-router-dom";
import ProductItem from "../product-item/product-item.component";

const ProductsDirectory = ({ products }) => {
  const { category, productTitle } = useParams();

  const productsByCategory = products.filter((el) => el.category === category);

  const singleProduct = productTitle
    ? productsByCategory.filter((el) => el.title === productTitle)
    : null;

  return (
    <div className="products-directory">
      <h1>{category}</h1>
      {singleProduct ? (
        <ProductItem
          type="product-item product-item-single"
          item={singleProduct[0]}
        />
      ) : (
        productsByCategory.map((el, i) => (
          <ProductItem
            key={i}
            item={el}
            type="product-item product-item-shop"
          />
        ))
      )}
    </div>
  );
};

export default ProductsDirectory;
