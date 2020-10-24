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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
