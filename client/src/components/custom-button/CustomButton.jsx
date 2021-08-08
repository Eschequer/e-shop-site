import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${styles.customButton} ${
        isGoogleSignIn ? styles.googleSignIn : ""
      } ${inverted ? styles.inverted : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
