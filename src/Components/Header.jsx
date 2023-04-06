import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
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

      <nav className={`${styles.nav} `} ref={nav}>
        <button className={styles.btnMobile} onClick={toggleMenu}>
          Menu
          <span className={styles.hamburguer}></span>
        </button>
        <ul className={styles.menu}>
          <li>
            <a href="/"></a>A
          </li>
          <li>
            <a href="/"></a>B
          </li>
          <li>
            <a href="/"></a>C
          </li>
          <li>
            <a href="/"></a>D
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
