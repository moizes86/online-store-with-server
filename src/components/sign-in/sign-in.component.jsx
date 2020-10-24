import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const handleInputChange = (e) => {
    // 3
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
  };

  const [values, setValues] = useState({ email: "", password: "" }); // 1
  const { email, password } = values; // 2. initialize

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/*  */}

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleInputChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleInputChange}
          required
        />

        <div className="bottom">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            googleButton={"google-sign-in"}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
