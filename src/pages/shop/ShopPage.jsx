import React from "react";
import { connect } from "react-redux";
import styles from "./ShopPage.module.scss";

import { Route } from "react-router-dom";

import CollectionPageContainer from "../collection/CollectionPageContainer";
import CollectionsOverviewContainer from "../../components/collections/collections-overview/CollectionsOverviewContainer";

import { updateCollectionsAsync } from "../../redux/actions/shopActions";

class ShopPage extends React.Component {
  componentDidMount() {
    /*const collectionReference = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionReference.onSnapshot(
      (snapshot) => {
        const collections = addDataToCollectionSnapshot(snapshot);
        this.props.updateCollections(collections)

        this.setState({ isLoading: false });
      }
    );*/

    this.props.updateCollectionsAsync();
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

export default connect(null, { updateCollectionsAsync })(ShopPage);
