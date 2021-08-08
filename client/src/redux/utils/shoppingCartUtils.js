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

export const removeItemFromShoppingCart = (shoppingCartItems, itemToRemove) => {
  return shoppingCartItems.filter((cartItem) => cartItem !== itemToRemove);
};

export const removeItem = (shoppingCartItems, item) => {
  if (item.quantity > 1) {
    return shoppingCartItems.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }

  return shoppingCartItems.filter((cartItem) => cartItem !== item);
};
