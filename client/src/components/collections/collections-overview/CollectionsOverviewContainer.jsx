import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../with-spinner/withSpinner";
import CollectionsOverview from "./CollectionsOverview";
import { selectIsCollectionsFetching } from "../../../redux/utils/shopSelectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  withSpinner(CollectionsOverview)
);

export default CollectionsOverviewContainer;
