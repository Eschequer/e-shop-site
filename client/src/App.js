import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/utils/userSelectors";
import { checkUserSession } from "./redux/actions/userActions";
import Header from "./components/header/Header";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const ShopPage = lazy(() => import("./pages/shop/ShopPage"));
const SignInAndSignOutPage = lazy(() =>
  import("./pages/sign-in-and-sign-out/SignInAndSignOutPage")
);
const CheckoutPage = lazy(() => import("./pages/checkout/CheckoutPage"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <Header />
      <Switch>
        {currentUser && <Redirect strict from="/sign-in" to="/" />}
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/sign-in" component={SignInAndSignOutPage} />
          </Suspense>
        </ErrorBoundary>
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
