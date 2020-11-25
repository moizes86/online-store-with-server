import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: `AIzaSyAjMAn4rkG0PyTytecVZzro0BPcBe-ahZA`,
  // apiKey: `${process.env.REACT_APP_FIREBASE_SECRET_KEY}`,
  authDomain: "online-store-15ffc.firebaseapp.com",
  databaseURL: "https://online-store-15ffc.firebaseio.com",
  projectId: "online-store-15ffc",
  storageBucket: "online-store-15ffc.appspot.com",
  messagingSenderId: "324647104537",
  appId: "1:324647104537:web:32274a48ca7d28a1553a88",
  measurementId: "G-SF3RQW6ZPP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

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

// export const addItemsCollection = async (key, itemsToAdd) => {
//   const collectionRef = firestore.collection(key);
//   const batch = firestore.batch();
//   itemsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   await batch.commit();
// };

// export const convertItemsCollectionSnapshotToMap = (collections) => {
//   const transformedCollection = collections.docs.map((doc) => doc.data());
//   return transformedCollection;
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
