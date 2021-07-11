import React from "react";
import { connect } from "react-redux";
import styles from "./ShoppingCartIcon.module.scss";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping_bag_icon.svg";
import { toggleCartVisibility } from "../../redux/actions/shoppingCartActions";

const ShoppingCartIcon = ({ toggleCartVisibility }) => {
  return (
    <div className={styles.cartIcon} onClick={toggleCartVisibility}>
      <ShoppingBagIcon />
      <span className={styles.itemCount}>0</span>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return { toggleCartVisibility: () => dispatch(toggleCartVisibility()) };
}

export default connect(null, mapDispatchToProps)(ShoppingCartIcon);
