import React, { useEffect, useRef, useState } from "react";
import styles from "./TrabalheConosco.module.css";
import trabalhador from "../../assets/trabalhe-conosco.png";

const TrabalheConosco = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Criando o link mailto com assunto e corpo
  const handleMailTo = () => {
    const subject = "Envio de currículo";
    const body = `
      Nome: \n
      E-mail: \n
      Telefone: \n
      Anexe seu currículo
    `;
    window.location.href = `mailto:seu-email@dominio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="trabalhe-conosco">
      <div
        ref={containerRef}
        className={`${styles.container} ${inView ? styles.visible : ""}`}
      >
        <div className={styles.subConteiner}>
          <div className={styles.texto}>
            <h1>Trabalhe conosco!</h1>
            <h2>Venha fazer parte do nosso time!</h2>
            <button className="button" onClick={handleMailTo}>
              Enviar e-mail com currículo
            </button>
          </div>
          <div className={styles.imagem}>
            <img src={trabalhador} alt="trabalhador" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabalheConosco;
