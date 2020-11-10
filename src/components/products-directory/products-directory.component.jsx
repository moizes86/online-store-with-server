import React from "react";

//STYLES
import "./products-directory.styles.scss";

//REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selectors";

//ROUTING
import { useParams } from "react-router-dom";

//COMPONENTS
import ProductItem from "../product-item/product-item.component";

/////////

const ProductsDirectory = ({ items }) => {
  const { category, itemID } = useParams();

  function getSingleItem() {
    return items.filter((el) => el.id === parseInt(itemID));
  }

  function getItemsByCategory() {
    return items.filter((el) => el.category === category);
  }

  let singleItem = getSingleItem();
  let itemsByCategory = getItemsByCategory();

  return (
    <div className="products-directory">
      <h1>{category}</h1>

      {itemID ? (
        <div className="product-container">
          <ProductItem
            class_type="product-item product-item-single"
            item={singleItem[0]}
          />
        </div>
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
  items: selectShopItems,
});

export default connect(mapStateToProps)(ProductsDirectory);
