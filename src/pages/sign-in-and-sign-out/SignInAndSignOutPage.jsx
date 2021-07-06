import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import styles from "./SignInAndSignOutPage.module.scss";
import SignUp from "../../components/sign-up/SignUp";

const SignInAndSignOutPage = () => {
  return (
    <div className={styles.signInAndSignUp}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOutPage;
