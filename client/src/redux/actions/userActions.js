import * as actionTypes from "./actionTypes";

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: actionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = () => ({
  type: actionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: actionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: actionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION,
});
