import * as actionTypes from "../actions/actionTypes";
import {
  addDataToCollectionSnapshot,
  firestore,
} from "../../firebase/firebase-utils";

export const startFetchingCollections = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const updateCollectionsAsync = () => {
  return async (dispatch) => {
    try {
      const collectionRef = firestore.collection("collections");

      dispatch(startFetchingCollections());

      const snapshot = await collectionRef.get();
      const collections = addDataToCollectionSnapshot(snapshot);

      dispatch(fetchCollectionsSuccess(collections));
    } catch (e) {
      dispatch(fetchCollectionsFailure(e.message));
    }
  };
};
