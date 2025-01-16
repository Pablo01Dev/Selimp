import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_9pn2sae';
    const templateID = 'template_dvnqexd';
    const publicKey = 'lypKr7KiImbHG2k_p';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email enviado com sucesso:', response.status, response.text);
        setStatus('Email enviado com sucesso!');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
        setStatus('Erro ao enviar o email. Tente novamente.');
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Telefone:</label>
          <input
            type="number"
            id="tel"
            name="tel"  
            value={formData.tel}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default Form;