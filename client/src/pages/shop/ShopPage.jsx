import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./ShopPage.module.scss";

import { Route } from "react-router-dom";

import CollectionPageContainer from "../collection/CollectionPageContainer";
import CollectionsOverviewContainer from "../../components/collections/collections-overview/CollectionsOverviewContainer";

import { startFetchingCollections } from "../../redux/actions/shopActions";

const ShopPage = ({ startFetchingCollections, match }) => {
  useEffect(() => {
    startFetchingCollections();
  }, [startFetchingCollections]);

  return (
    <div className={styles.shopPage}>
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={match.path + "/:collectionId"}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default connect(null, { startFetchingCollections })(ShopPage);
