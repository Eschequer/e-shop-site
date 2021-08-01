import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/SignInAndSignOutPage";

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/utils/userSelectors";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { checkUserSession } from "./redux/actions/userActions";

class App extends React.Component {
  componentDidMount() {
    /*this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        return userRef.onSnapshot((docSnapshot) => {
          this.props.setCurrentUser({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
        });
      }

      this.props.setCurrentUser(user);
    });*/

    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    /* this.unsubscribeFromAuth();*/
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          {this.props.currentUser && <Redirect strict from="/sign-in" to="/" />}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/sign-in" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: selectCurrentUser(state),
  };
}

export default connect(mapStateToProps, { checkUserSession })(App);
