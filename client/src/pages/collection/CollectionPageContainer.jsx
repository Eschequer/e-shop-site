import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionPage from "./CollectionPage";
import { selectIsCollectionsFetching } from "../../redux/utils/shopSelectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionPageContainer = connect(mapStateToProps)(
  withSpinner(CollectionPage)
);

export default CollectionPageContainer;
