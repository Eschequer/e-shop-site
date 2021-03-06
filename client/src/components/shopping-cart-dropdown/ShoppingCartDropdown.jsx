import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import styles from "./ShoppingCartDropdown.module.scss";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";
import { selectShoppingCartItems } from "../../redux/utils/ShoppingCartSelectors";
import { toggleCartVisibility } from "../../redux/actions/shoppingCartActions";

const ShoppingCartDropdown = ({ shoppingCartItems, history, dispatch }) => {
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
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

function mapStateToProps(state) {
  return { shoppingCartItems: selectShoppingCartItems(state) };
}

export default withRouter(connect(mapStateToProps)(ShoppingCartDropdown));
