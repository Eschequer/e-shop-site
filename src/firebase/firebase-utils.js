import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPMQPCEdz-F6FlLHxg5pZ3MKPhnQHEOUg",
  authDomain: "e-shop-site.firebaseapp.com",
  projectId: "e-shop-site",
  storageBucket: "e-shop-site.appspot.com",
  messagingSenderId: "765946969528",
  appId: "1:765946969528:web:f7d0b5292916b31171e34d",
  measurementId: "G-J7T7Y1DSXC",
};

export async function createUserProfileDocument(userAuth, additionalData) {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
