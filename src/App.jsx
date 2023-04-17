import React from "react";
import Header from "./Components/Header";
import Login from "./Telas/Login";
import { Context, LoginContext } from "./LoginContext";

function App() {
  return (
    <LoginContext>
      <Header />
      <Login />
    </LoginContext>
  );
}

export default App;
