// Importamos el JSON desde la perspectiva de la carpeta 'scripts'
import jsonUsers from '../db/user.json' with { type: 'json' };
import { isAuthenticated } from './storage.js';

export function initLogin() {
    // Si ya está autenticado pero entra a index.html, lo mandamos al Dashboard
    if (isAuthenticated()) {
        window.location.href = './src/pages/dashboard.html';
        return;
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitamos el '?' en la URL
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Buscamos en el JSON de ejecutivo
            const userFound = jsonUsers.find(u => u.email === email && u.password === password);

            if (userFound) {
                localStorage.setItem('authenticated', 'true');
                window.location.href = './src/pages/dashboard.html'; 
            } else {
                alert("Credenciales incorrectas");
            }
        });
    }
}