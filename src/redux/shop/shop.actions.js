import ShopActionTypes from "./shop.types";

export const fetchItemsAsync = () => {
  return (dispatch) => {
    dispatch(fetchItemsStart());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((items) => dispatch(fetchItemsSuccess(items)))
      .catch((error) => dispatch(fetchItemsFailure(error)));
  };
};

export const fetchItemsStart = () => ({
  type: ShopActionTypes.FETCH_ITEMS_START,
});

export const fetchItemsSuccess = (items) => ({
  type: ShopActionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: ShopActionTypes.FETCH_ITEMS_FAILURE,
  payload: error,
});

export const getItemsByCategory = (category) => ({
  type: ShopActionTypes.GET_ITEMS_BY_CATEGORY,
  payload: category,
});

export const getSingleItem = (itemID) => ({
  type: ShopActionTypes.GET_SINGLE_ITEM,
  payload: itemID,
});

export const getItemsFromFirebase = collection => ({
  type: ShopActionTypes.GET_ITEMS_FROM_FIREBASE,
  payload: collection
})
