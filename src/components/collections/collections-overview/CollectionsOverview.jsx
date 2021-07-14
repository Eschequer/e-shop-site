import React from "react";
import styles from "./CollectionsOverview.module.scss";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollectionsForPreview } from "../../../redux/utils/shopSelectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className={styles.collectionsOverview}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
