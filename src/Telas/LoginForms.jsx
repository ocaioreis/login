import React from "react";
import styles from "./Login.module.css";
import { LoginContext, Context } from "../LoginContext";

const LoginForms = () => {
  const global = React.useContext(Context);

  const [newNome, setNewNome] = React.useState();
  const [newEmail, setNewEmail] = React.useState();
  const [newSenha, setNewSenha] = React.useState();

  async function verificarLogin(event) {
    event.preventDefault();
    const user = global.dados.find(
      (usuario) =>
        usuario.email === global.login && usuario.senha === global.senha
    );

    if (user) {
      global.setNome(user.nome);
      global.setVerificarLogado();
      global.setLogado(true);
    } else {
      alert("Usuário e/ou senha inválidos!");
    }
  }

  function cadastro(event) {
    const usuario = global.dados.find((usuario) => usuario.email === newEmail);
    if (usuario) {
      event.preventDefault();
      alert("Usuário já cadastrado!");
    } else {
      global.dados.push({
        nome: newNome,
        email: newEmail,
        senha: newSenha,
      });
      global.send();
      console.log(global.dados);
      console.log(newEmail);
    }
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
          <form className={styles.form} onSubmit={verificarLogin}>
            <label htmlFor="chk">Login</label>{" "}
            <input
              type="text"
              className={styles.input}
              placeholder="email"
              onBlur={(content) => global.setLogin(content.target.value)}
              required
            />{" "}
            <input
              type="password"
              className={styles.input}
              placeholder="senha"
              onBlur={(content) => global.setSenha(content.target.value)}
              required
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

export default LoginForms;
