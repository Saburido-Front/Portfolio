function showToggle() {
    document.querySelector('.password-container').classList.add('show-toggle');
}

function hideToggle() {
    setTimeout(() => {
        document.querySelector('.password-container').classList.remove('show-toggle');
    }, 100);
}

function togglePassword() {
    var passwordField = document.getElementById('senha'); 
    var passwordFieldType = passwordField.type;
    passwordField.type = passwordFieldType === 'password' ? 'text' : 'password';
    showToggle();
}

function logar() {
    console.log("Função logar foi chamada");
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    
    if (login === "Selene" && senha === "Rules") {
        setTimeout(function(){
            location.href = "home.html";
        }, 3000);
    } else {
        alert('Usuário ou Senha Incorretos');
    }
}
