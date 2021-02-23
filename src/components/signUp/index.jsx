import React, { useState } from "react";
import { Link } from "react-router-dom";
import setSignUp from "../../actions/registration";
import { connect } from "react-redux";
import {
  Rightwrapper,
  SignUpWrapper,
  TopRightButton,
  FormWrapper,
  FormInnerWrapper,
  FormFieldWrapper,
  Button,
} from "../../layout/signIn";

const SignUp = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSignUp({ email });
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
                <Link to="/congratulations">
                  <Button>CONTINUE</Button>
                </Link>
              </div>
            </form>
          </FormInnerWrapper>
        </FormWrapper>
      </Rightwrapper>
    </>
  );
};

export default connect(null, { setSignUp })(SignUp);
