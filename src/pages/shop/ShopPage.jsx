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
import withSpinner from "../../components/with-spinner/withSpinner";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { isLoading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionReference = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionReference.onSnapshot(
      (snapshot) => {
        const collections = addDataToCollectionSnapshot(snapshot);
        this.props.updateCollections(collections);

        this.setState({ isLoading: false });
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
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={this.state.isLoading}
              {...props}
            />
          )}
        />
        <Route
          path={match.path + "/:collectionId"}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.isLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(ShopPage);
