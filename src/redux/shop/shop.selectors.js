import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectIsItemsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.items
);

export const selectShopCategories = createSelector(
    [selectShop],
    shop => shop.categories
);

export const selectItemsByCategory = createSelector(
    [selectShop],
    shop => shop.itemsByCategory
);

export const selectSingleItem = createSelector(
    [selectShop],
    shop => shop.singleItem
);