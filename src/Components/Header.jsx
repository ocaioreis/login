import React, { useState } from "react";
import styles from "./Header.module.css";
import { LoginContext, Context } from "../LoginContext";

const Header = () => {
  const global = React.useContext(Context);

  let nav = React.useRef();

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    nav.current.classList.toggle(`${styles.active}`);
  }

  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>
        Logo
      </a>
      {global.logado ? (
        <nav className={styles.nav} ref={nav}>
          <button className={styles.btnMobile} onClick={toggleMenu}>
            {global.logado ? `${global.nome}` : ""}
            <span className={styles.hamburguer}></span>
          </button>
          <ul className={styles.menu}>
            <li>
              <a href="/">Minha Conta</a>
            </li>
            <li>
              <a href="/">Tools</a>
            </li>
            <li>
              <a href="/" onClick={() => global.logOut()}>
                Sair
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <p></p>
      )}
    </header>
  );
};

export default Header;
