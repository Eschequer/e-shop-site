import React from "react";
import styles from "./withSpinner.module.scss";

const withSpinner = (WrappedComponent) => {
  return function Spinner({ isLoading, ...otherProps }) {
    return isLoading ? (
      <div className={styles.spinnerOverlay}>
        <div className={styles.spinnerContainer} />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default withSpinner;
