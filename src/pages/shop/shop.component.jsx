import React from "react";

//STYLES
import "./shop.styles.scss";

//ROUTING
import { Route, withRouter } from "react-router-dom";

//REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShopItems,
  selectShopCategories,
} from "../../redux/shop/shop.selectors";

//COMPONENTS
import CategoriesDirectory from "../../components/categories-directory/categories-directory.component";
import ProductsDirectory from "../../components/products-directory/products-directory.component";

const Shop = ({ items, categories, match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CategoriesDirectory} />
      <Route
        exact
        path={[`${match.path}/:category`, `${match.path}/:category/:itemID`]}
        component={ProductsDirectory}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems,
  categories: selectShopCategories,
});

export default connect(mapStateToProps)(withRouter(Shop));
