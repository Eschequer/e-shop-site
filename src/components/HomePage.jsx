import React from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  console.log(styles);

  return (
    <div className={styles.homepage}>
      <div className={styles["directory-menu"]}>
        <div className="menu-item">
          <div className="content">
            <h1 className={"title"}>SHOES</h1>
            <span className={"subtitle"}>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className={"title"}>JEANS</h1>
            <span className={"subtitle"}>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className={"title"}>JACKETS</h1>
            <span className={"subtitle"}>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className={"title"}>WOMEN</h1>
            <span className={"subtitle"}>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className={"title"}>MEN</h1>
            <span className={"subtitle"}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
