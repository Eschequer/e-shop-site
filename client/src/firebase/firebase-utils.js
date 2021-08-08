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

export async function addCollectionAndDocuments(
  collectionKey,
  documentObjects
) {
  const collectionRef = firestore.collection(collectionKey);

  // eslint-disable-next-line no-unused-vars
  const batch = firestore.batch();

  documentObjects.forEach((doc) => {
    const docRef = collectionRef.doc();

    batch.set(docRef, doc);
  });

  return await batch.commit();
}

export function addDataToCollectionSnapshot(collectionSnapshot) {
  const transformedCollection = collectionSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export default firebase;
