import React from "react";
import styles from "./Login.module.css";
import { LoginContext, Context } from "../LoginContext";
import { CADASTRAR } from "../Api";

const Login = () => {
  const global = React.useContext(Context);

  const [newEmail, setNewEmail] = React.useState();
  const [newSenha, setNewSenha] = React.useState();

  async function cadastro(event) {
    event.preventDefault();
    global.dados.push({ email: newEmail, senha: newSenha });
  }

  console.log(global.dados);

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
            <input type="text" className={styles.input} placeholder="email" />{" "}
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
            <input type="text" className={styles.input} placeholder="Nome" />
            <input
              type="email"
              className={styles.input}
              placeholder="Email"
              onBlur={(content) => setNewEmail(content.target.value)}
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Senha"
              onBlur={(content) => setNewSenha(content.target.value)}
            />
            <button onClick={() => global.send(global.dados)}>Ok</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
