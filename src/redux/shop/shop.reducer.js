import ShopActionTypes from "./shop.types";

import { getCategories } from "./shop.utils";

const INITIAL_STATE = {
  items: [],
  categories: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ITEMS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        categories: getCategories(action.payload),
        isFetching: false,
      };

    case ShopActionTypes.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case ShopActionTypes.GET_ITEMS_FROM_FIREBASE:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
