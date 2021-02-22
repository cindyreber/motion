import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import logIn from "../../actions/index";
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
} from "./style";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    props.logIn(credentials, history);
  };

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
            <TopRightButton>Sign Up</TopRightButton>
          </SignUpWrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Sign In</h2>
              <form onSubmit={handleLogin}>
                <FormFieldWrapper>
                  <i className="fas fa-user-circle"></i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Username"
                  />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                </FormFieldWrapper>
                <div className="signin-content">
                  <Button>SIGNIN</Button>
                </div>
              </form>
            </FormInnerWrapper>
          </FormWrapper>
        </Rightwrapper>
      </MainWrapper>
    </>
  );
}

export default connect(null, { logIn })(LoginForm);
