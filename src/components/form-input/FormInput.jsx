import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ label, inputChangeHandler, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.formInput}
        onChange={inputChangeHandler}
        {...otherProps}
      />
      {label && (
        <label
          className={`${otherProps.value.length ? styles.shrink : ""} ${
            styles.formInputLabel
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
