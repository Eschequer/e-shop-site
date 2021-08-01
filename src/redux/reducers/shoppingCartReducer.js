import * as actionTypes from "../actions/actionTypes";
import {
  addItemToShoppingCart,
  removeItem,
  removeItemFromShoppingCart,
} from "../utils/shoppingCartUtils";

const INITIAL_STATE = { hidden: true, shoppingCartItems: [] };

export const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case actionTypes.ADD_COLLECTION_ITEM:
      return {
        ...state,
        shoppingCartItems: addItemToShoppingCart(
          state.shoppingCartItems,
          action.payload
        ),
      };
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        shoppingCartItems: removeItemFromShoppingCart(
          state.shoppingCartItems,
          action.payload
        ),
      };
    case actionTypes.REMOVE_COLLECTION_ITEM:
      return {
        ...state,
        shoppingCartItems: removeItem(state.shoppingCartItems, action.payload),
      };
    case actionTypes.CLEAR_SHOPPING_CART:
      return {
        ...state,
        shoppingCartItems: [],
      };
    default:
      return state;
  }
};
