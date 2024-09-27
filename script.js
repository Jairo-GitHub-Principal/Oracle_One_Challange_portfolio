function enviarEmail() {
    console.log("Função enviarEmail chamada")
    // Limpar mensagens de erro anteriores
    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroMensagem').textContent = "";
    
    // Pegar os valores dos campos
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    var valid = true;

    // Verificar se o campo Nome está vazio
    if (nome === "") {
        document.getElementById('erroNome').textContent = "Por favor, preencha o campo Nome.";
        valid = false;
    }

    // Verificar se o campo Email está vazio
    if (email === "") {
        document.getElementById('erroEmail').textContent = "Por favor, preencha o campo E-mail.";
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('erroEmail').textContent = "Por favor, insira um e-mail válido.";
        valid = false;
    }

    // Verificar se o campo Mensagem está vazio
    if (mensagem === "") {
        document.getElementById('erroMensagem').textContent = "Por favor, preencha o campo Mensagem.";
        valid = false;
    }

    // Se todos os campos estão preenchidos corretamente
    if (valid) {
        alert("Todos os campos estão preenchidos corretamente!");
        // Aqui você pode enviar os dados para o servidor
    }

   limparCamposForm();
}

// Função simples para validar e-mail
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function limparCamposForm(){
     // limpar os campos apos enviar o email
     document.getElementById('nome').value = "";
     document.getElementById('email').value = "";
     document.getElementById('mensagem').value = "";
}