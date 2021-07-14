import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, image, size, linkUrl, match, history }) => {
  return (
    <div className={`${styles.menuItem} ${styles[size]}`}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        className={styles.content}
      >
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
