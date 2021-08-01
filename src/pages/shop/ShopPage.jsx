import React from "react";
import { connect } from "react-redux";
import styles from "./ShopPage.module.scss";

import { Route } from "react-router-dom";

import CollectionPageContainer from "../collection/CollectionPageContainer";
import CollectionsOverviewContainer from "../../components/collections/collections-overview/CollectionsOverviewContainer";

import { startFetchingCollections } from "../../redux/actions/shopActions";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.startFetchingCollections();
  }

  render() {
    let { match } = this.props;

    return (
      <div className={styles.shopPage}>
        <Route
          exact
          path={match.path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={match.path + "/:collectionId"}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect(null, { startFetchingCollections })(ShopPage);
