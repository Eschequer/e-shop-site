import React from "react";
import styles from "./CollectionPreview.module.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
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
