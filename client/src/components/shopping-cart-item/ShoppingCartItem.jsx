import React, { memo } from "react";
import styles from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  console.log("Render");

  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt="shopping cart item" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span>{`${quantity} x ${price}`}</span>
      </div>
    </div>
  );
};

export default memo(ShoppingCartItem);
