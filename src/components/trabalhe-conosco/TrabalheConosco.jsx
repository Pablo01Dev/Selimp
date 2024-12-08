import React from 'react';
import styles from './TrabalheConosco.module.css';
import trabalhador from "../../assets/trabalhe-conosco.png";
const TrabalheConosco = () => {
  return (
    <section id="trabalhe-conosco">
      <div className={styles.container}>
        <div className={styles.subConteiner}>
          <div className={styles.texto}>
            <h1>Trabalhe conosco!</h1>
            <h2>Venha fazer parte do nosso time!</h2>
            <button class="button">Clique Aqui</button>

          </div>
          <div className={styles.imagem}>
            <img src={trabalhador} alt="tralbalhador" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabalheConosco;
