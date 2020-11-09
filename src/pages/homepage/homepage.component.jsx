import React from "react";
import { useEffect } from "react";

//STYLES
import "./homepage.styles.scss";

//REDUX
import { connect } from "react-redux";
import { fetchItemsAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
  selectIsItemsFetching,
  selectShopItems,
} from "../../redux/shop/shop.selectors";

//CAROUSEL
import CarouselContainer from "../../components/carousel-container/carousel-container.component";

//SPINNER
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Homepage = ({ dispatch, isFetching, items }) => {
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchItemsAsync());
    }
  }, [items.length, dispatch]);

  return isFetching ? (
    <div className="loader-container">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={200}
        width={200}
      />
    </div>
  ) : (
    <div className="homepage">
      <CarouselContainer products={items} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsItemsFetching,
  items: selectShopItems,
});

export default connect(mapStateToProps)(Homepage);
