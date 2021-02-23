import React from "react";
import LoginForm from "./components/logIn";
import { PurpleStyle } from "./components/LeftLogin";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import SignUp from "./components/signUp";
import { MainWrapper } from "./layout/signIn";
import VerificationForm from "./components/verification";
import Congratulations from "./components/congratulations";

export const App = () => {
  return (
    <div>
      <Router history={history}>
        <MainWrapper>
          <PurpleStyle />
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/congratulations" exact component={Congratulations} />
            <Route path="/verification" exact component={VerificationForm} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </MainWrapper>
      </Router>
    </div>
  );
};
