import React from "react";
import { connect } from "react-redux";
import styles from "./CheckoutItem.module.scss";
import {
  removeCollectionItemFromCart,
  addCollectionItemToCart,
  removeCollectionItem,
} from "../../redux/actions/shoppingCartActions";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  removeItemFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="cart item" />
      </div>
      <span className={styles.name}>{name}</span>
      <div className={styles.quantity}>
        <span className={styles.arrow} onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        {quantity}
        <span className={styles.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className={styles.price}>{price}</span>
      <div
        className={styles.removeButton}
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, {
  removeItemFromCart: removeCollectionItemFromCart,
  removeItem: removeCollectionItem,
  addItem: addCollectionItemToCart,
})(CheckoutItem);
