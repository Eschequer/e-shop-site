import React from "react";
import { connect } from "react-redux";
import styles from "./CollectionPage.module.scss";
import { findShopCollectionByPathName } from "../../redux/utils/shopSelectors";
import CollectionItem from "../../components/collections/collection-item/CollectionItem";

const CollectionPage = ({ collection }) => {
  if (!collection) return null;

  const { title, items } = collection;

  return (
    <div className={styles.collectionPage}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      <div className={styles.items}>
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    collection: findShopCollectionByPathName(
      ownProps.match.params.collectionId
    )(state),
  };
}

export default connect(mapStateToProps)(CollectionPage);
