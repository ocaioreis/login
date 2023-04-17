import React from "react";
import { URL } from "../src/Api";
import axios from "axios";

export const Context = React.createContext();

export const LoginContext = ({ children }) => {
  const [logado, setLogado] = React.useState(false);
  const [dados, setDados] = React.useState();
  const [login, setLogin] = React.useState();
  const [senha, setSenha] = React.useState();
  const [nome, setNome] = React.useState(window.localStorage.getItem("nome"));

  function get() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }

  React.useEffect(() => {
    get();
  }, []);

  function getVerificarLogado() {
    const verificarEmail = window.localStorage.getItem("email");
    const verificarNome = window.localStorage.getItem("nome");
    verificarEmail && verificarNome ? setLogado(true) : setLogado(false);
  }

  function setVerificarLogado() {
    window.localStorage.setItem("email", `${login}`);
    window.localStorage.setItem("nome", `${nome}`);
  }

  function send() {
    axios.post(URL, dados).then((response) => console.log(response.data));
  }

  function logOut() {
    setLogado(false);
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("nome");
  }

  return (
    <Context.Provider
      value={{
        logado,
        setLogado,
        dados,
        send,
        get,
        login,
        senha,
        nome,
        setNome,
        setLogin,
        setSenha,
        setVerificarLogado,
        getVerificarLogado,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};
