import React, { useState, useEffect, useRef } from 'react';
import styles from './contato.module.css';
import atendente from "../../assets/atendente.png";
import button from "../../assets/button.png";

const Contato = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        telefone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    // Refs para os elementos que queremos observar
    const containerRef = useRef(null);
    const wppImgRef = useRef(null);
    const formRef = useRef(null);
    const submitBtnRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target); // Para não observar mais depois de visível
                }
            });
        }, options);

        // Observar os elementos
        observer.observe(containerRef.current);
        observer.observe(wppImgRef.current);
        observer.observe(formRef.current);
        observer.observe(submitBtnRef.current);

        return () => {
            observer.disconnect(); // Limpar o observer
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Lógica para envio dos dados de formulário (pode ser via fetch ou similar)
    };

    return (
        <section id="contato">
            <div className={styles.subContainer}>
                <div className={styles.container} ref={containerRef}>
                    <div className={styles.wpp} ref={wppImgRef}>
                        <img src={atendente} alt="Atendente" />
                        <h2>Fale agora<br />com um especialista</h2>
                        <a href="https://wa.me/5521964098669">
                            <img src={button} alt="Whatsapp Button" />
                        </a>
                    </div>

                    <div className={styles.espacer}></div>

                    <div>
                        <h2 className={styles.title}>Deixe uma Mensagem!</h2>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit}
                            ref={formRef}
                        >
                            <div className={styles.formGroup}>
                                <label htmlFor="name"></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    placeholder="Seu Nome"
                                    aria-label="Nome"
                                    aria-required="true"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    placeholder="Seu E-mail"
                                    aria-label="E-mail"
                                    aria-required="true"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="telefone"></label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    required
                                    value={formState.telefone}
                                    onChange={handleInputChange}
                                    placeholder="Seu Telefone"
                                    aria-label="Telefone"
                                    aria-required="true"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message"></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    placeholder="Sua Mensagem"
                                    aria-label="Mensagem"
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn} ref={submitBtnRef}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;
