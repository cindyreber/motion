import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
} from "../../layout/signIn";
import UserAvatar from "../../layout/svgs/UserAvatar";
import Password from "../../layout/svgs/Password";

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
      <Rightwrapper>
        <SignUpWrapper>
          Don't have an account?
          <Link to="/signup">
            <TopRightButton>Sign Up</TopRightButton>
          </Link>
        </SignUpWrapper>
        <FormWrapper>
          <FormInnerWrapper>
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
              <FormFieldWrapper>
                <i className="fas fa-user-circle">
                  <UserAvatar />
                </i>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Username"
                />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <i className="fas fa-lock">
                  <Password />
                </i>
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
    </>
  );
}

export default connect(null, { logIn })(LoginForm);
