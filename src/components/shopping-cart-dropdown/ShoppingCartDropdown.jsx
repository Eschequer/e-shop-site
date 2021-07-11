import React from "react";
import CustomButton from "../custom-button/CustomButton";
import styles from "./ShoppingCartDropdown.module.scss";

const ShoppingCartDropdown = () => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems} />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default ShoppingCartDropdown;
