document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var senha = document.getElementById('senha').value;
    var confSenha = document.getElementById('confsenha').value;
    var email = document.getElementById('email').value;
    var confEmail = document.getElementById('confemail').value;

    var errorMsg = document.getElementById('error');
    var errorMsgPass = document.getElementById('errorpass');

    // Verifica se as senhas coincidem
    if (senha !== confSenha) {
        errorMsgPass.textContent = 'As senhas não coincidem.';
        return;
    } else {
        errorMsgPass.textContent = '';
    }

    // Verifica se os e-mails coincidem
    if (email !== confEmail) {
        errorMsg.textContent = 'Os e-mails não coincidem.';
        return;
    } else {
        errorMsg.textContent = '';
    }

    // Se passar nas verificações, pode prosseguir com o envio ou outra lógica
    alert('Registro concluído com sucesso!');
    location.href = "login.html"
    
    // Aqui você pode adicionar mais lógica, como enviar o formulário
});

