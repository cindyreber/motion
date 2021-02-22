import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LogIn from "./components/logIn";
import { SignUp } from "./components/signUp";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </div>
  );
};
