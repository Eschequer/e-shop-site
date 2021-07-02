import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to="/">
        <Logo />
      </Link>
      <div className={styles.options}>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/sign-in">SIGN IN</Link>
      </div>
    </div>
  );
};

export default Header;
