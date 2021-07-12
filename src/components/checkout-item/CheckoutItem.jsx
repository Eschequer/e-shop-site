import React from "react";
import styles from "./CheckoutItem.module.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="cart item" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeButton}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
