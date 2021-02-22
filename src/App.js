import React from "react";
import LoginForm  from "./components/logIn";
import { PurpleStyle } from "./components/LeftLogin"

export const App = () => {
  return (
    <div>
      <LoginForm />
      <PurpleStyle />
    </div>
  );
};