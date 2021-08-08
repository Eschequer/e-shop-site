import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase-utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "../actions/userActions";

export function* getSnapshotFromUser(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);

    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userRef.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUser(user);
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

export function* watchStartSigningInWithGoogle() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* watchStartSigningInWithEmail() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* checkUserAuthentication() {
  try {
    const user = yield getCurrentUser();

    if (!user) return;

    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* watchCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, checkUserAuthentication);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* watchSignOutStart() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const userCredentials = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );

    yield put(signUpSuccess());
    yield getSnapshotFromUser(userCredentials.user, { displayName });
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* watchSignUpStart() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUp);
}
