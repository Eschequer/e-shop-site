import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  addDataToCollectionSnapshot,
  firestore,
} from "../../firebase/firebase-utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "../actions/shopActions";

export function* fetchAndUpdateCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    const collections = yield call(addDataToCollectionSnapshot, snapshot);

    yield put(fetchCollectionsSuccess(collections));
  } catch (e) {
    console.log(e);
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* watchFetchCollections() {
  yield takeLatest(
    actionTypes.FETCH_COLLECTIONS_START,
    fetchAndUpdateCollectionsAsync
  );
}
