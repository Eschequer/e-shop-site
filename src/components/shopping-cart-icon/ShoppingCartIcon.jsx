import React from "react";
import { connect } from "react-redux";
import styles from "./ShoppingCartIcon.module.scss";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping_bag_icon.svg";
import { toggleCartVisibility } from "../../redux/actions/shoppingCartActions";
import { selectShoppingCartItemsCount } from "../../redux/utils/ShoppingCartSelectors";

const ShoppingCartIcon = ({ toggleCartVisibility, shoppingCartItemsCount }) => {
  return (
    <div className={styles.cartIcon} onClick={toggleCartVisibility}>
      <ShoppingBagIcon />
      <span className={styles.itemCount}>{shoppingCartItemsCount}</span>
    </div>
  );
};

function mapStateToProps(state) {
  return { shoppingCartItemsCount: selectShoppingCartItemsCount(state) };
}

function mapDispatchToProps(dispatch) {
  return { toggleCartVisibility: () => dispatch(toggleCartVisibility()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);
