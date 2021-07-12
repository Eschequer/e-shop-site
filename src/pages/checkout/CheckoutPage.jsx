import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "./CheckoutPage.module.scss";
import {
  selectShoppingCartItems,
  selectShoppingCartTotal,
} from "../../redux/utils/ShoppingCartSelectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const CheckoutPage = ({ shoppingCartItems, total }) => {
  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {shoppingCartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={styles.total}>TOTAL: {total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shoppingCartItems: selectShoppingCartItems,
  total: selectShoppingCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
