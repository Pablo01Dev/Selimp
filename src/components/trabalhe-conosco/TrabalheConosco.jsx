import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com"; // Importe o EmailJS
import styles from "./TrabalheConosco.module.css";
import trabalhador from "../../assets/trabalhe-conosco.png";
import Modal from "./Modal"; // Importe o componente de modal

const TrabalheConosco = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Enviar o formulário através do EmailJS
    emailjs
      .sendForm("service_9pn2sae", "template_ew8r46z", formData, "lypKr7KiImbHG2k_p")
      .then(
        (result) => {
          console.log("Mensagem enviada: ", result.text);
          alert("Mensagem enviada com sucesso!");
          setIsModalOpen(false); // Fecha o modal após o envio
        },
        (error) => {
          console.log("Erro ao enviar mensagem: ", error.text);
          alert("Erro ao enviar mensagem. Tente novamente!");
        }
      );
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Formulário de Cadastro</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <label>
            Currículo:
            <input type="file" name="resume" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" required />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </Modal>
    </section>
  );
};

export default TrabalheConosco;
