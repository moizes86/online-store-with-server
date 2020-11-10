import React, { useEffect } from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

//FIREBASE
import { auth, createUserProfileDocument, /*addItemsCollection*/ } from "./firebase/firebase.utils";

//REDUX
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

//COMPONENTS
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
//

const App = ({ setCurrentUser, /*shopItems*/ }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      // addItemsCollection('items', shopItems); **ADD TO FIREBASE ONCE AND FOR ALL**
      return () => unsubscribeFromAuth();
    });
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/sign-in" component={SignInAndSignUp}>
          {auth.currentUser ? <Redirect to="/" /> : null}
        </Route>
        <Route exact path="/checkout" component={Checkout} />
      </Switch>

      <Footer />
    </div>
  );
};

const mapStateToProps = ({ user, /*shop*/ }) => ({
  currentUser: user.currentUser,
  // shopItems: shop.items // ADD TO FIREBASE ONCE
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
