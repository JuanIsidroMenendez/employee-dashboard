// Refactorización del código:
// Modulación auth.js

export const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePassword = pass => pass.length >= 8 && /\d/.test(pass);


import { validUser } from './user.js';
import { loginUser } from './storage.js';

if (!window.location.pathname.includes('dashboard.html')) {
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (validUser.some(u => u.email === email && u.password === password)) {
            loginUser();
            window.location.href = './src/pages/dashboard.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos.');
        }
    });
}






// Valida si un texto tiene un formato de email válido (expresión regular o regex).
//Deberá retornar true o false dependiendo de si el formato es correcto o no.

//^: Indica el inicio de la cadena.
//[^\s@]+: Coincide con uno o más caracteres que no sean espacios en blanco ni el símbolo @. Esto asegura que haya al menos un carácter antes del símbolo @.
//@: Coincide con el símbolo @, que es obligatorio en una dirección de correo electrónico.
//No tiene caso saberlo de memoria. Basta saber que esto valida el formato email.

//export function validateEmail(email) {
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //return emailRegex.test(email);
    
//}

// Valida si la contraseña tiene 8 caracteres y que contenga al menos un número.

//export function validatePassword(password) {
   // const hasMinimumLength = password.length >= 8;
   // const hasNumber = /\d/.test(password);

   // return hasMinimumLength && hasNumber;
//}

// Guarda en localStorage que el usuario ha iniciado sesión satisfactoriamente.

//export function loginUser() {
   // localStorage.setItem('isLoggedIn', 'true');
//}

// Elimina la sesión de localStorage al cerrar sesión.

//export function logoutUser() {
   // localStorage.removeItem('isLoggedIn');
//}

//Comprueba si el usuario tiene una sesión activa.

//export function isAuthenticated() {
    //return localStorage.getItem('isLoggedIn') === 'true';
//}


