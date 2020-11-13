import React, { useState } from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setValues({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2>I Don't Have An Account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="display name"
          handleChange={(e) => handleChange(e)}
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={(e) => handleChange(e)}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={(e) => handleChange(e)}
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="confirm password"
          handleChange={(e) => handleChange(e)}
          required
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
