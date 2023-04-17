import React from "react";
import { LoginContext, Context } from "../LoginContext";
import LoginForms from "./LoginForms";

const Login = () => {
  const global = React.useContext(Context);

  React.useEffect(() => {
    global.getVerificarLogado();
  }, [global.logado]);

  function attNome() {
    if (global.nome) {
      window.localStorage.setItem("nome", global.nome);
    } else {
      window.localStorage.getItem("nome");
    }
  }

  return global.logado ? (
    <h1>
      Olá, {attNome()} {global.nome}!
    </h1>
  ) : (
    <LoginForms />
  );
};

export default Login;
