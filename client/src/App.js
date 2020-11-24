
import React, { useEffect } from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

//FIREBASE
// import { auth } from "./firebase/firebase.utils";

//REDUX
import { connect } from "react-redux";
import { getUserFromFirebaseAsync } from "./redux/user/user.actions";

//COMPONENTS
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
// import { addItemsCollection } from "./firebase/firebase.utils";
//

const App = ({dispatch, currentUser}) => {
  useEffect(() => {
    dispatch(getUserFromFirebaseAsync());
  }, [ dispatch]);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/sign-in" component={SignInAndSignUp}>
          {currentUser ? <Redirect to="/" /> : null}
        </Route>
        <Route exact path="/checkout" component={Checkout} />
      </Switch>

      <Footer />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(App);


//   useEffect(() => {
//     const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);
//         userRef.onSnapshot((snapshot) => {
//           setCurrentUser({
//             id: snapshot.id,
//             ...snapshot.data(),
//           });
//         });
//       }

//       setCurrentUser(userAuth);
//       // addItemsCollection('items', shopItems); **ADD TO FIREBASE ONCE AND FOR ALL**
//       return () => unsubscribeFromAuth();
//     });
//   }, [setCurrentUser]);