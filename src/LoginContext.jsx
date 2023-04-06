import React from "react";
import { CADASTRAR, URL } from "../src/Api";
import axios from "axios";

export const Context = React.createContext();

export const LoginContext = ({ children }) => {
  const [logado, setLogado] = React.useState(false);
  const [dados, setDados] = React.useState();

  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function send(dados) {
    axios.post(URL, dados).then((response) => console.log(response.data));
  }

  console.log(dados);

  return (
    <Context.Provider value={{ logado, setLogado, dados, send }}>
      {children}
    </Context.Provider>
  );
};
