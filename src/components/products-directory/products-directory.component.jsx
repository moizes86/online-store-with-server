import React, { useEffect } from "react";

//STYLES
import "./products-directory.styles.scss";

//REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectItemsByCategory,
  selectSingleItem,
} from "../../redux/shop/shop.selectors";
import {
  getItemsByCategory,
  getSingleItem,
} from "../../redux/shop/shop.actions";

//ROUTING
import { useParams } from "react-router-dom";

//COMPONENTS
import ProductItem from "../product-item/product-item.component";

/////////

const ProductsDirectory = ({ dispatch, singleItem, itemsByCategory }) => {
  const { category, itemID } = useParams();

  // console.log(itemID);
  useEffect(() => {
    itemID
      ? dispatch(getSingleItem(itemID))
      : dispatch(getItemsByCategory(category));
  }, [itemID, category, dispatch]);

  return (
    <div className="products-directory">
      <h1>{category}</h1>

      {itemID ? (
        <ProductItem
          class_type="product-item product-item-single"
          item={singleItem[0]}
        />
      ) : (
        itemsByCategory.map((el, i) => (
          <ProductItem
            key={i}
            item={el}
            class_type="product-item product-item-shop"
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  singleItem: selectSingleItem,
  itemsByCategory: selectItemsByCategory,
});

export default connect(mapStateToProps)(ProductsDirectory);
