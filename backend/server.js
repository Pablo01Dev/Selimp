import express from 'express';
import emailjs from 'emailjs'; // Usando o pacote emailjs para SMTP

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para enviar e-mail com EmailJS via SMTP
app.post('/send-email', (req, res) => {
    const { name, email, telefone, message } = req.body;

    // Verificar se os dados foram recebidos corretamente
    if (!name || !email || !telefone || !message) {
        return res.status(400).send('Dados incompletos. Verifique o formulário.');
    }

    // Configuração para se conectar ao servidor SMTP do EmailJS
    const server = emailjs.server.connect({
        user: 'lypKr7KiImbHG2k_p', // Substitua pela sua chave pública do EmailJS
        password: 'MWmBFUqV7IWn7fB6vlqVX', // Substitua pela sua chave privada do EmailJS
        host: 'smtp.emailjs.com',
        ssl: true
    });

    // Enviar o e-mail via servidor SMTP
    server.send(
        {
            text: message,           // O conteúdo da mensagem
            from: email,             // E-mail do remetente
            to: 'pablogomesdg@gmail.com', // O e-mail do destinatário
            subject: `Mensagem de ${name}`, // Assunto
        },
        (error, message) => {
            if (error) {
                console.error('Erro ao enviar o e-mail:', error);
                return res.status(500).send('Erro ao enviar mensagem. Tente novamente!');
            } else {
                console.log('E-mail enviado com sucesso!', message);
                return res.status(200).send('Mensagem enviada com sucesso!');
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
