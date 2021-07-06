import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e);
    }

    this.setState({ email: "", password: "" });
  };

  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.signIn}>
        <h2>Sign In</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            inputChangeHandler={this.inputChangeHandler}
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            inputChangeHandler={this.inputChangeHandler}
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />

          <div className={styles.buttons}>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
