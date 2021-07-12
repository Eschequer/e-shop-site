export const addItemToShoppingCart = (shoppingCartItems, itemToAdd) => {
  const existingCartItem = shoppingCartItems.find((cartItem) => {
    return cartItem.id === itemToAdd.id;
  });

  if (existingCartItem) {
    return shoppingCartItems.map((cartItem) => {
      return cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...shoppingCartItems, { ...itemToAdd, quantity: 1 }];
};
