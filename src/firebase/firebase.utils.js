import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-jEa7r4rkf1qFnitRWfkEoVDQiqCBvRo",
  authDomain: "sign-in-practice-e6e73.firebaseapp.com",
  databaseURL: "https://sign-in-practice-e6e73.firebaseio.com",
  projectId: "sign-in-practice-e6e73",
  storageBucket: "sign-in-practice-e6e73.appspot.com",
  messagingSenderId: "828445741557",
  appId: "1:828445741557:web:4844ddcc805b8f816e50bc",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addItemsCollection = async (key, itemsToAdd) => {
  const collectionRef = firestore.collection(key);
  const batch = firestore.batch();
  itemsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertItemsCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => doc.data());
  return transformedCollection;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
