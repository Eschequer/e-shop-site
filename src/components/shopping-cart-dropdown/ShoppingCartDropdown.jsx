import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import styles from "./ShoppingCartDropdown.module.scss";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";

const ShoppingCartDropdown = ({ shoppingCartItems }) => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {shoppingCartItems.length ? (
          shoppingCartItems.map((cartItem) => (
            <ShoppingCartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles.emptyMessage}>
            Your shopping cart is empty
          </span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

function mapStateToProps(state) {
  return { shoppingCartItems: state.shoppingCart.shoppingCartItems };
}

export default connect(mapStateToProps)(ShoppingCartDropdown);
