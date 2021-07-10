import * as actionTypes from "../actions/actionTypes";

export const setCurrentUser = (user) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});
