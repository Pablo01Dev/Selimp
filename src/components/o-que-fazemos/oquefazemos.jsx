import React from 'react';
import styles from './oquefazemos.module.css';
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

const OQueFazemos = () => {
  return (
    <section id="nossos-servicos">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2>Limpeza e Conservação</h2>
            <p>
              Através de metodologia e processos de trabalho bem definidos, aliados a modernos equipamentos
              de limpeza corporativa, realizamos a limpeza e conservação de sua empresa ou condomínio de maneira
              ágil e eficiente, com o melhor custo benefício.
            </p>
            <ul>
              <li>Serviços de Limpeza</li>
              <li>
                Serviços de Limpeza Flexível (Uma inovação da Selimp para reduzir os custos em sua empresa).
              </li>
            </ul>
          </div>
          <div className={styles.image}>
            <img src={img3} alt="Limpeza e Conservação" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={img4} alt="Portaria e Controle de Acesso" />
          </div>
          <div className={styles.text2}>
            <h2>Portaria e Controle de Acesso</h2>
            <p>
              A portaria é essencial para a segurança de prédios e empresas, controlando o acesso de moradores e visitantes.
              Quando o acesso não é restrito, a segurança é comprometida.
            </p>
            <p>
              Por isso, a Selimp oferece treinamento rigoroso para porteiros, controladores de acesso e fiscais, com testes
              de risco e preparação psicológica para lidar com situações tensas.
            </p>
            <p>
              Além disso, supervisionamos o desempenho dos profissionais, sugerindo melhorias e soluções personalizadas para cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OQueFazemos;
