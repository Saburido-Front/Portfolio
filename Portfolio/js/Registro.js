document.addEventListener('DOMContentLoaded', function() {
  let senha = document.getElementById('senha');
  let senhaC = document.getElementById('senhaC');

  function validarSenha() {
    if (senha.value !== senhaC.value) {
      senhaC.setCustomValidity("As senhas não coincidem!");
      senhaC.reportValidity();
      return false;
    } else {
      senhaC.setCustomValidity("");
      return true;
    }
  }

  senhaC.addEventListener('input', validarSenha);
});