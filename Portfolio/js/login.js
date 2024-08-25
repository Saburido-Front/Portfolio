function logar(){

    var login = document.getElementbyId('Usuario').value;
    var senha = document.getElementbyId('Senha').value;

    if(login === "Selene" && senha === "Rules"){
        alert('Tudo Certo, Seja Bem Vindo(a) a Selene');
        location.href = "home.html";
    }else{
        alert('Usuario Ou Senha Incorretos, Tente Novamente.')
    }
}