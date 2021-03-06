import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  selectShopCollections,
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const findShopCollectionByPathName = (pathName) => {
  return createSelector(selectShopCollections, (collections) =>
    collections ? collections[pathName] : null
  );
};

export const selectIsCollectionsFetching = createSelector(
  selectShop,
  (shop) => shop.isFetching
);
