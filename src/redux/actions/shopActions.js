import * as actionTypes from "../actions/actionTypes";

export const updateCollections = (collections) => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});
