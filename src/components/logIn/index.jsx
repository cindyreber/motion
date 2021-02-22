import React, { useState } from "react";
import styled from "styled-components";
import logIn from "../../actions/index";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Button = styled.button`
  font-family: sans-serif;
  font-size: 12px;
  border: none;
  height: 60px;
  width: 260px;
  border: none;
  color: #ffffff;
  border-radius: 50px;
  background: linear-gradient(102deg, #c468ff, #6e91f6);
`;

const Leftwrapper = styled.div`
  width: 40vw;
`;

const Rightwrapper = styled.div`
  width: 60vw;
`;

const FormWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-size: 48px;
    font-weight: 300;
    padding-bottom: 30px;
  }
`;

const TopRightButton = styled.button`
  margin: 0 0 0 20px;
  border-radius: 50px;
  border: solid 1px #e6d8d8;
  background-color: white;

  height: 40px;
  width: 120px;
`;
const SignUpWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MainWrapper = styled.section`
  min-height: 100vh;
  display: flex;
`;
const FormFieldWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  & input {
    font-size: 16px;
    border: none;
    padding: 10px 10px 10px 0;
  }
  & input:focus {
    outline: none;
  }
  & .fas {
    margin-right: 10px;
    color: #6e91f6;
  }
`;
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
