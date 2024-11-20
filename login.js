document.addEventListener('DOMContentLoaded', function() {
    // Revisamos si ya hay un usuario almacenado
    if (localStorage.getItem('username')) {
        alert('Bienvenido de nuevo, ' + localStorage.getItem('username') + '!');
    }

    // Formulario de login
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificamos que los campos no estén vacíos (esto es solo un ejemplo, en producción se deberían hacer verificaciones más robustas)
        if (username && password) {
            // Guardamos el nombre de usuario en localStorage
            localStorage.setItem('username', username);

            alert('¡Inicio de sesión exitoso!');
            // Opcionalmente, redirigir a otra página o mostrar contenido protegido
            // window.location.href = 'dashboard.html';  // redirigir a otra página
        } else {
            alert('Por favor, ingrese todos los campos.');
        }
    });
});
