import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

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

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
