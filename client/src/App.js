import React, { useEffect } from "react";
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

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <Header />
      <Switch>
        {currentUser && <Redirect strict from="/sign-in" to="/" />}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/sign-in" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: selectCurrentUser(state),
  };
}

export default connect(mapStateToProps, { checkUserSession })(App);
