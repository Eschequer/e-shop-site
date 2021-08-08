import * as actionTypes from "../actions/actionTypes";
import { put, takeLatest } from "redux-saga/effects";
import { clearShoppingCart } from "../actions/shoppingCartActions";

export function* clearShoppingCartOnSignOut() {
  yield put(clearShoppingCart());
}

export function* watchSignOutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearShoppingCartOnSignOut);
}
