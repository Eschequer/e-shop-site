import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = { hidden: true };

export const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
