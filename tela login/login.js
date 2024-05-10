document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aqui você pode adicionar lógica para autenticar o usuário, por exemplo, enviando uma solicitação AJAX para um servidor.
    // Por enquanto, vamos apenas simular a autenticação com usuário "admin" e senha "admin".
    if (username === "admin" && password === "admin") {
        alert("Login bem-sucedido!");
        // Redirecionar para a página principal ou realizar outras ações necessárias após o login.
    } else {
        alert("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
});



document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Impede o comportamento padrão do formulário de ser enviado
    event.preventDefault();
    
    // Redireciona para a página de login
    window.location.href = "login.html";
});
