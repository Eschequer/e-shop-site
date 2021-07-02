import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/SignInAndSignOutPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
