import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./SignIn.module.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/actions/userActions";

const SignIn = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.startSigningInWithEmail({ email, password });

    setUserCredentials({ email: "", password: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className={styles.signIn}>
      <h2>Sign In</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          inputChangeHandler={handleInputChange}
          label="email"
          name="email"
          type="email"
          value={email}
          required
        />
        <FormInput
          inputChangeHandler={handleInputChange}
          label="password"
          type="password"
          name="password"
          value={password}
          required
        />

        <div className={styles.buttons}>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={props.startSigningInWithGoogle}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, {
  startSigningInWithGoogle: googleSignInStart,
  startSigningInWithEmail: emailSignInStart,
})(SignIn);
