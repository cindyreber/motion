import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../../api/registration";
import {
  Rightwrapper,
  SignUpWrapper,
  TopRightButton,
  FormWrapper,
  FormInnerWrapper,
  FormFieldWrapper,
  Button,
} from "../../layout/signIn";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registration(email);
  };
  return (
    <>
      <Rightwrapper>
        <SignUpWrapper>
          Don't have an account?
          <Link to="/">
            <TopRightButton>Sign In</TopRightButton>
          </Link>
        </SignUpWrapper>
        <FormWrapper>
          <FormInnerWrapper>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <FormFieldWrapper>
                <i className="fas fa-envelope"></i>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Email"
                />
              </FormFieldWrapper>
              <div className="signin-content">
                <Button>CONTINUE</Button>
              </div>
            </form>
          </FormInnerWrapper>
        </FormWrapper>
      </Rightwrapper>
    </>
  );
};
