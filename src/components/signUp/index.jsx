import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MainWrapper,
  Leftwrapper,
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
  return (
    <>
      <MainWrapper>
        <Leftwrapper>
          {" "}
          CSS animations with @keyframes aren't scoped to a single component but
          you still don't want them to be global to avoid name collisions. This
          is why we export a keyframes helper which will generate a unique
          instance that you can use throughout your app:
        </Leftwrapper>
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
              <form>
                <FormFieldWrapper>
                  <i className="fas fa-user-circle"></i>
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
      </MainWrapper>
    </>
  );
};
