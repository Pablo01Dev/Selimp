import React from 'react';
import styles from './TrabalheConosco.module.css';
import trabalhador from "../../assets/trabalhe-conosco.png";
const TrabalheConosco = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Trabalhe conosco!</h1>
        <h2>Venha fazer parte do nosso time!</h2>
        <button>clique aqui</button>
      </div>
      <div>
        <img src="../assets/trabalhe-conosco.png" alt="" />
      </div>

    </div>
  );
};

export default TrabalheConosco;
