import React, { useEffect } from "react";

//STYLES
import "./homepage.styles.scss";

//REDUX
import { connect } from "react-redux";
import {
  fetchItemsAsync,
  // getItemsFromFirebase,
} from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selectors";

//FIREBASE
// import {
//   firestore,
//   convertItemsCollectionSnapshotToMap,
// } from "../../firebase/firebase.utils";

//CAROUSEL
import CarouselContainer from "../../components/carousel-container/carousel-container.component";

//SPINNER
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Homepage = ({ dispatch, items }) => {
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItemsAsync());
    }
  }, [dispatch, items]);

  return !items ? (
    <div className="loader-container">
      <Loader type="Puff" color="#00BFFF" height={200} width={200} />
    </div>
  ) : (
    <div className="homepage">
      <CarouselContainer products={items} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems,
});

export default connect(mapStateToProps)(Homepage);

// const itemsRef = firestore.collection("items");
// const unsubscribeFromSnapshot = itemsRef.onSnapshot(async (snapshot) => {
//   const itemsFromFirebase = convertItemsCollectionSnapshotToMap(snapshot);
//   dispatch(getItemsFromFirebase(itemsFromFirebase));
//   });
//   return () => unsubscribeFromSnapshot();
