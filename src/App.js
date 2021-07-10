import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/SignInAndSignOutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/userActions";

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("user exists and is ", user);

        const userRef = await createUserProfileDocument(user);

        return userRef.onSnapshot((docSnapshot) => {
          this.props.setCurrentUser({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
        });
      }

      this.props.setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) };
}

export default connect(null, mapDispatchToProps)(App);
