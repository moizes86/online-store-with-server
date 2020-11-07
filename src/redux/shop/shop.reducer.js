import ShopActionTypes from "./shop.types";

import {
  getCategories,
  utilsGetItemsByCategory,
  utilsGetSingleItem,
} from "./shop.utils";

const INITIAL_STATE = {
  items: [],
  categories: null,
  itemsByCategory: null,
  singleItem: false,
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

    case ShopActionTypes.GET_ITEMS_BY_CATEGORY:
      return {
        ...state,
        itemsByCategory: utilsGetItemsByCategory(state.items, action.payload),
      };

    case ShopActionTypes.GET_SINGLE_ITEM:
      return {
        ...state,
        singleItem: utilsGetSingleItem(state.items, action.payload),
      };

    default:
      return state;
  }
};

export default shopReducer;
