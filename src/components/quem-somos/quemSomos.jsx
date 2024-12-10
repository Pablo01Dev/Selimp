import React from 'react';
import styles from './QuemSomos.module.css';

const QuemSomos = () => {
  return (
    <section id="sobre">
      <div className={styles.container}>
        <h1>Quem Somos</h1>
        <p>
          Fundada em 1999, na cidade de São Gonçalo, a <strong>SELIMP</strong>, uma empresa sólida
          e de reconhecida qualidade de atendimento e serviços, é dirigida por profissionais
          extremamente experientes. A Selimp atua no segmento de terceirização de mão de obra
          de portaria e limpeza em geral. Apesar da vasta experiência adquirida ao longo de mais de 20 anos
          de mercado, é uma empresa moderna e eficiente, que se adapta à realidade e necessidade de cada cliente.
        </p>
      </div>
    </section>
  );
};

export default QuemSomos;
