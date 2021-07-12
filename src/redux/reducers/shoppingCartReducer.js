import * as actionTypes from "../actions/actionTypes";
import { addItemToShoppingCart } from "../utils/shoppingCartUtils";

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
    default:
      return state;
  }
};
