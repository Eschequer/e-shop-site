import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.scss";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase-utils";

const Header = ({ currentUser }) => {
  async function handleSignOut() {
    await auth.signOut();
  }

  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to="/">
        <Logo />
      </Link>
      <div className={styles.options}>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT US</Link>
        {currentUser ? (
          <div className={styles.option} onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { currentUser: state.user.currentUser };
}

export default connect(mapStateToProps)(Header);
