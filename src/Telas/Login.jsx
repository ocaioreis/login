import React from "react";
import { LoginContext, Context } from "../LoginContext";
import LoginForms from "./LoginForms";

const Login = () => {
  const global = React.useContext(Context);

  return global.logado ? <h1>Você já está logado</h1> : <LoginForms />;
};

export default Login;
