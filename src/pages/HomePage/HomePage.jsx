import React from "react";
import styles from "./HomePage.module.scss";
import DirectoryMenu from "../../components/DirectoryMenu/DirectoryMenu";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
