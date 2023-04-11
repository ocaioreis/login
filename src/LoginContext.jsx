import React from "react";
import { URL } from "../src/Api";
import axios from "axios";

export const Context = React.createContext();

export const LoginContext = ({ children }) => {
  const [logado, setLogado] = React.useState(false);
  const [dados, setDados] = React.useState();

  function get() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }

  React.useEffect(() => {
    get();
  }, []);

  function send() {
    axios.post(URL, dados).then((response) => console.log(response.data));
    console.log(dados);
  }

  console.log(dados);

  return (
    <Context.Provider value={{ logado, setLogado, dados, send, get }}>
      {children}
    </Context.Provider>
  );
};
