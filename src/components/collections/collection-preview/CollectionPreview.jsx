import React from "react";

import styles from "./CollectionPreview.module.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items, history }) => {
  const handleClickOnTitle = () => {
    const currentPath = history.location.pathname;

    history.push(currentPath + "/" + title.toLowerCase());
  };

  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>
        <span onClick={handleClickOnTitle}>{title.toUpperCase()}</span>
      </h1>
      <div className={styles.preview}>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
