import React from 'react';
import styles from './contato.module.css';
import atendente from '../../assets/atendente.png';
import button from '../../assets/button.png';
import Form from './form.jsx';
const Contato = () => {
    return (
        <section id="contato">
            <div className={styles.subContainer}>
                <div className={styles.container}>
                    <div className={styles.wpp}>
                        <img src={atendente} alt="Atendente" />
                        <h2>
                            Fale agora
                            <br />
                            com um especialista
                        </h2>
                        <a href="https://wa.me/5521964098669">
                            <img src={button} alt="Whatsapp Button" />
                        </a>
                    </div>

                    <div className={styles.espacer}></div>

                    <div className={styles.form}>
                        <h2 className={styles.title}>Deixe uma Mensagem!</h2>
                        <Form /> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;
