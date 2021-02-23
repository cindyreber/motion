import React from "react";

import LoginForm  from "./components/logIn";
import { PurpleStyle } from "./components/LeftLogin"

import { BrowserRouter, Route } from "react-router-dom";


import { SignUp } from "./components/signUp";


export const App = () => {
  return (
    <div>
      <PurpleStyle />

      <BrowserRouter>
        <Route path="/" exact component={LoginForm} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </div>
  );
};