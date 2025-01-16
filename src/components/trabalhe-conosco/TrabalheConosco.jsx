import React, { useEffect, useRef, useState } from "react";
import styles from "./TrabalheConosco.module.css";
import trabalhador from "../../assets/trabalhe-conosco.png";
import Modal from "./Modal"; // Importe o componente de modal

const TrabalheConosco = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlar o modal

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

  // Função para abrir o modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Função para criar o link mailto com as informações preenchidas
  const handleMailto = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const nome = formData.get('name');
    const email = formData.get('email');
    const telefone = formData.get('phone');

    // Criar o corpo do e-mail
    const assunto = 'Envio de Currículo';
    const corpo = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\nAnexe seu currículo`;

    // Criar o link mailto
    const mailtoLink = `mailto:contato@seusite.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    // Abrir o cliente de e-mail com as informações preenchidas
    window.location.href = mailtoLink;
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
            <button className="button" onClick={handleModalOpen}>
              Clique Aqui
            </button>
          </div>
          <div className={styles.imagem}>
            <img src={trabalhador} alt="trabalhador" />
          </div>
        </div>
      </div>

      {/* Usando o componente Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Formulário de Cadastro</h2>
        <form className={styles.form} onSubmit={handleMailto}>
          <label>
            Nome:
            <input type="text" name="name" placeholder="Digite seu nome" required />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" placeholder="Digite seu e-mail" required />
          </label>
          <label>
            Telefone:
            <input type="tel" name="phone" placeholder="Digite seu telefone" required />
          </label>
          <button type="submit">Anexar Currículo</button>
        </form>
      </Modal>
    </section>
  );
};

export default TrabalheConosco;
