import React, { useEffect, useRef, useState } from 'react';
import styles from './QuemSomos.module.css';

const QuemSomos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Dispara o evento quando 50% do elemento estiver visível
    );

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
    <section id="sobre">
      <div
        ref={containerRef}
        className={`${styles.container} ${isVisible ? styles.visible : ''}`}
      >
        <h1>Quem Somos</h1>
        <p>
          Fundada em 1999, na cidade de São Gonçalo, a <strong>SELIMP</strong>, uma empresa sólida
          e de reconhecida qualidade de atendimento e serviços, é dirigida por profissionais
          extremamente experientes. A Selimp atua no segmento de terceirização de mão de obra
          de portaria e limpeza em geral. Apesar da vasta experiência adquirida ao longo de mais de 20 anos
          de mercado, é uma empresa moderna e eficiente, que se adapta à realidade e necessidade de cada cliente.
        </p>
      </div>
    </section>
  );
};

export default QuemSomos;
