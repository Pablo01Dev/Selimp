import React, { useEffect, useRef, useState } from 'react';
import styles from './TrabalheConosco.module.css';
import trabalhador from "../../assets/trabalhe-conosco.png";

const TrabalheConosco = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // 10% do elemento precisa estar visível
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true); // O elemento entrou na viewport
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

  return (
    <section id="trabalhe-conosco">
      <div
        ref={containerRef}
        className={`${styles.container} ${inView ? styles.visible : ''}`}
      >
        <div className={styles.subConteiner}>
          <div className={styles.texto}>
            <h1>Trabalhe conosco!</h1>
            <h2>Venha fazer parte do nosso time!</h2>
            <button className="button" ><a href="https://wa.me/5521964098669">Clique Aqui</a></button>
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
