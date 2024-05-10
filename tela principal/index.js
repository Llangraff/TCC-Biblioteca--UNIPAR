// Este trecho de código deve ser adicionado na página de login após a autenticação bem-sucedida

// Obtém o nome de usuário do formulário de login
var username = document.getElementById("username").value;

// Salva o nome de usuário na sessão para acessá-lo na página principal
sessionStorage.setItem("username", username);
