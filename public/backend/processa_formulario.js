const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "SEU_EMAIL@gmail.com",
      pass: "SUA_SENHA_APP",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "DESTINATARIO@gmail.com",
      subject: `Contato de ${name}`,
      text: message,
    });
    res.status(200).send("Mensagem enviada com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao enviar e-mail: " + error.message);
  }
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
