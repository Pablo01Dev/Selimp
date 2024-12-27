<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário de maneira segura
    $nome = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $mensagem = htmlspecialchars($_POST['message']);

    // Validação básica de e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("E-mail inválido.");
    }

    // Configurações do e-mail
    $para = "pablogomesdg@gmail.com"; // Substitua pelo seu e-mail
    $assunto = "Novo contato do formulário";
    $corpo = "
        Nome: $nome\n
        E-mail: $email\n
        Telefone: $telefone\n
        Mensagem: $mensagem\n
    ";
    $headers = "From: contato@seudominio.com"; // Substitua pelo seu domínio

    // Envio do e-mail
    if (mail($para, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
} else {
    echo "Método de envio inválido.";
}
?>
