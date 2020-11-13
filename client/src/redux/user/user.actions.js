import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

// TEST ZONE

export const getUserFromFirebaseAsync =  () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
  };
};
