import * as actionTypes from "../actions/actionTypes";

export const toggleCartVisibility = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

export const addCollectionItemToCart = (item) => ({
  type: actionTypes.ADD_COLLECTION_ITEM,
  payload: item,
});

export const removeCollectionItemFromCart = (item) => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeCollectionItem = (item) => ({
  type: actionTypes.REMOVE_COLLECTION_ITEM,
  payload: item,
});

export const clearShoppingCart = () => ({
  type: actionTypes.CLEAR_SHOPPING_CART,
});
