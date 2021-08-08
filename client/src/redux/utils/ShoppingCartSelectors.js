import { createSelector } from "reselect";

const selectShoppingCart = (state) => state.shoppingCart;

export const selectShoppingCartItems = createSelector(
  [selectShoppingCart],
  (shoppingCart) => shoppingCart.shoppingCartItems
);

export const selectShoppingCartHidden = createSelector(
  selectShoppingCart,
  (cart) => cart.hidden
);

export const selectShoppingCartItemsCount = createSelector(
  [selectShoppingCartItems],
  (shoppingCartItems) =>
    shoppingCartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
export const selectShoppingCartTotal = createSelector(
  [selectShoppingCartItems],
  (shoppingCartItems) =>
    shoppingCartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
