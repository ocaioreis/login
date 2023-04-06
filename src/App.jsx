import React from "react";
import Header from "./Components/Header";
import Login from "./Telas/Login";
import { Context, LoginContext } from "./LoginContext";

function App() {
  return (
    <LoginContext>
      <div>
        <Header />
        <Login />
      </div>
    </LoginContext>
  );
}

export default App;
