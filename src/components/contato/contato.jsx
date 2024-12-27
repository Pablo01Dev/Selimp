import React, { useState, useRef } from 'react';
import axios from 'axios';  // Importando o Axios
import styles from './contato.module.css';
import atendente from "../../assets/atendente.png";  // Certifique-se de ter essa imagem no caminho correto
import button from "../../assets/button.png";  // Certifique-se de ter essa imagem no caminho correto

const Contato = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        telefone: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState(''); // Para mensagens de sucesso ou erro
    const formRef = useRef(null);  // Referência para o formulário

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Impede o envio tradicional do formulário

        try {
            // Enviando os dados com Axios
            const response = await axios.post('/backend/processa_formulario.php', formState);

            // Exibir mensagem de sucesso
            setStatusMessage('Mensagem enviada com sucesso!');
            formRef.current.reset();  // Limpa o formulário após envio
        } catch (error) {
            // Exibir mensagem de erro
            setStatusMessage('Erro ao enviar mensagem. Tente novamente!');
        }
    };

    return (
        <section id="contato">
            <div className={styles.subContainer}>
                <div className={styles.container}>
                    <div className={styles.wpp}>
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
                            ref={formRef}
                            onSubmit={handleSubmit} // Submeter com Axios
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
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>Enviar</button>
                        </form>

                        {/* Exibir mensagem de sucesso ou erro */}
                        {statusMessage && (
                            <div className={styles.statusMessage}>
                                {statusMessage}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;
