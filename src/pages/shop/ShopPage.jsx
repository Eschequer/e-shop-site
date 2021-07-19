import React from "react";
import { connect } from "react-redux";
import styles from "./ShopPage.module.scss";
import CollectionsOverview from "../../components/collections/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";
import {
  firestore,
  addDataToCollectionSnapshot,
} from "../../firebase/firebase-utils";

import { updateCollections } from "../../redux/actions/shopActions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionReference = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionReference.onSnapshot(
      (snapshot) => {
        const collections = addDataToCollectionSnapshot(snapshot);
        this.props.updateCollections(collections);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    let { match } = this.props;

    return (
      <div className={styles.shopPage}>
        <Route exact path={match.path} component={CollectionsOverview} />
        <Route
          path={match.path + "/:collectionId"}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(ShopPage);
