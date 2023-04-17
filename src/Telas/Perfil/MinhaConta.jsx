import React from "react";
import styles from "./MinhaConta.module.css";

const MinhaConta = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Minha Conta</h1>
      <button className={styles.button}>Editar Conta</button>
      <button className={styles.deletar}>Deletar Conta</button>
    </div>
  );
};

export default MinhaConta;
