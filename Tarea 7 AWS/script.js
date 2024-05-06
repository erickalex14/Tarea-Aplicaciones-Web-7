document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verificar las credenciales (simulación)
    if (username === 'usuario' && password === '123456') {
      // Si las credenciales son válidas, redirigir a una página de inicio de sesión exitoso (o realizar alguna otra acción)
      alert('Inicio de sesión exitoso. Redireccionando...');
      // Aquí puedes redirigir a otra página usando window.location.href = 'url_de_la_pagina';
    } else {
      // Si las credenciales son incorrectas, mostrar un mensaje de error
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  });