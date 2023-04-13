import React from "react";
import styles from "./Login.module.css";
import { LoginContext, Context } from "../LoginContext";

const Login = () => {
  const global = React.useContext(Context);

  const [newNome, setNewNome] = React.useState();
  const [newEmail, setNewEmail] = React.useState();
  const [newSenha, setNewSenha] = React.useState();

  const [login, setLogin] = React.useState();
  const [senha, setSenha] = React.useState();

  function cadastro(event) {
    event.preventDefault();
    global.dados.push({
      nome: newNome,
      email: newEmail,
      senha: newSenha,
    });
    global.send();
  }

  return (
    <section className={styles.content}>
      <div className={styles.main}>
        <input
          type="checkbox"
          id="chk"
          className={styles.chk}
          aria-hidden="true"
        />
        <div className={styles.login}>
          <form className={styles.form}>
            <label htmlFor="chk">Login</label>{" "}
            <input
              type="text"
              className={styles.input}
              placeholder="email"
              /* onBlur={(content) => {
                if (global.dados.includes(content.target.value))
                  return alert("naosei");
              }} */
            />{" "}
            <input
              type="password"
              className={styles.input}
              placeholder="senha"
            />
            <button className={styles.button}>Entrar</button>
          </form>
        </div>
        <div className={styles.register}>
          <form className={styles.form} onSubmit={cadastro}>
            <label htmlFor="chk">Cadastre-se</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Nome"
              onBlur={(content) => setNewNome(content.target.value)}
              required
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Email"
              onBlur={(content) => setNewEmail(content.target.value)}
              required
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Senha"
              required
              onBlur={(content) => setNewSenha(content.target.value)}
            />
            <button>Ok</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
