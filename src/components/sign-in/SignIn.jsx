import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./SignIn.module.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/actions/userActions";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { startSigningInWithEmail } = this.props;

    startSigningInWithEmail({ email, password });

    this.setState({ email: "", password: "" });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.signIn}>
        <h2>Sign In</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            inputChangeHandler={this.handleInputChange}
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            inputChangeHandler={this.handleInputChange}
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />

          <div className={styles.buttons}>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={this.props.startSigningInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  startSigningInWithGoogle: googleSignInStart,
  startSigningInWithEmail: emailSignInStart,
})(SignIn);
