import { all, call } from "redux-saga/effects";
import { watchFetchCollections } from "./shopSagas";
import {
  watchCheckUserSession,
  watchSignOutStart,
  watchSignUpStart,
  watchStartSigningInWithEmail,
  watchStartSigningInWithGoogle,
} from "./userSagas";
import { watchSignOutSuccess } from "./shoppingCartSagas";

export function* rootSaga() {
  yield all([
    call(watchFetchCollections),
    call(watchStartSigningInWithGoogle),
    call(watchStartSigningInWithEmail),
    call(watchCheckUserSession),
    call(watchSignOutStart),
    call(watchSignOutSuccess),
    call(watchSignUpStart),
  ]);
}
