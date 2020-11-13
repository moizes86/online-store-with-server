import React from "react";

//REDUX
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectShopCategories } from '../../redux/shop/shop.selectors'

//STYLES
import "./categories-directory.styles.scss";

//COMPONENTS
import CategoryItem from "../category-item/category-item.component";

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="menu-directory">
      {categories.map((el, i) => (
        <CategoryItem category={el.category} imageURL={el.image} key={i} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectShopCategories
})

export default connect(mapStateToProps)(CategoriesDirectory);
