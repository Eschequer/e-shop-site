import React from "react";
import styles from "./ShopPage.module.scss";
import CollectionsOverview from "../../components/collections/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className={styles.shopPage}>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={match.path + "/:collectionId"} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
