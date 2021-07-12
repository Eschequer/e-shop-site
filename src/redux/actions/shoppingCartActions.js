import * as actionTypes from "../actions/actionTypes";

export const toggleCartVisibility = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

export const addCollectionItemToCart = (item) => ({
  type: actionTypes.ADD_COLLECTION_ITEM,
  payload: item,
});
