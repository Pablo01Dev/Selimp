import React, { useState } from 'react';
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

    return (
        <section id="contato">
            <div className={styles.subContainer}>
                <div className={styles.container}>
                    <div className={styles.wpp}>
                        <img src={atendente} alt="" />
                        <h2>Fale agora<br />com um especialista</h2>
                        <a href="">
                            <img src={button} alt="" />
                        </a>
                    </div>

                    <div className={styles.espacer}>
                        <p></p>
                    </div>

                    {/* Formulário atualizado */}
                    <form
                        className={styles.form}
                        method="POST"
                        action="/backend/processa_formulario.php"
                    >
                        <div className={styles.formGroup}>
                            <label
                                htmlFor="name"
                                style={{ display: formState.name.length > 0 ? 'none' : 'block' }}
                            >
                                Nome:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="email"
                                style={{ display: formState.email.length > 0 ? 'none' : 'block' }}
                            >
                                E-mail:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="telefone"
                                style={{ display: formState.telefone.length > 0 ? 'none' : 'block' }}
                            >
                                Telefone:
                            </label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                required
                                value={formState.telefone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="message"
                                style={{ display: formState.message.length > 0 ? 'none' : 'block' }}
                            >
                                Mensagem:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                value={formState.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contato;
