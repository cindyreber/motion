import React from "react";
import LoginForm from "./components/logIn";
import { PurpleStyle } from "./components/LeftLogin";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import { MainWrapper } from "./layout/signIn";
import VerificationForm from "./components/verification";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainWrapper>
          <PurpleStyle />
          {/* <VerificationForm /> */}
          <Route path="/" exact component={LoginForm} />
          <Route path="/signup" exact component={SignUp} />
        </MainWrapper>
      </BrowserRouter>
    </div>
  );
};
