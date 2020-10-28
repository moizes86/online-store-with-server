import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./shop.styles.scss";

import MenuDirectory from "../../components/menu-directory/menu-directory.component";
import ProductsDirectory from "../../components/products-directory/products-directory.component";

const Shop = ({ products, match }) => {
  const categories = products
    .map((el) => ({
      category: el.category,
      image: el.image,
    }))
    .reduce((acc, curr) => {
      if (!acc.some((obj) => obj.category === curr.category)) {
        acc.push(curr);
      }
      return acc;
    }, []);

  return (
    <div className="shop">
      <Route exact path={`${match.path}`}>
        <MenuDirectory categories={categories} />
      </Route>
      <Route exact path={`${match.path}/:category`}>
        <ProductsDirectory products={products} />
      </Route>
      <Route exact path={`${match.path}/:category/:productTitle`}>
        <ProductsDirectory products={products} />
      </Route>
    </div>
  );
};

export default withRouter(Shop);
