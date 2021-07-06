import React from "react";
import styles from "./SignUp.module.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";

class SignUp extends React.Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  inputChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");

      return;
    }

    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log(userCredentials);

      await createUserProfileDocument(userCredentials.user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div className={styles.signUp}>
        <h2 className={styles.title}>Sign Up</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.inputChangeHandler}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.inputChangeHandler}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.inputChangeHandler}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
