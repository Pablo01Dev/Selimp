import React, { useState } from "react";
import axios from "axios";
import styles from "./contato.module.css";

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        telefone: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState(""); // Para mensagens de sucesso ou erro

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o envio tradicional do formulário

        try {
            // Envia os dados para o backend
            const response = await axios.post('http://localhost:3001/send-email', formState);

            // Verifica se o envio foi bem-sucedido
            if (response.status === 200) {
                setStatusMessage("Mensagem enviada com sucesso!");
                setFormState({
                    name: "",
                    email: "",
                    telefone: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            setStatusMessage("Erro ao enviar mensagem. Tente novamente!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Seu E-mail"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <input
                    type="tel"
                    name="telefone"
                    placeholder="Seu Telefone"
                    value={formState.telefone}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Enviar</button>

            {statusMessage && <div>{statusMessage}</div>}
        </form>
    );
};

export default Form;
