// Valida si un texto tiene un formato de email válido (expresión regular o regex).
//Deberá retornar true o false dependiendo de si el formato es correcto o no.

//^: Indica el inicio de la cadena.
//[^\s@]+: Coincide con uno o más caracteres que no sean espacios en blanco ni el símbolo @. Esto asegura que haya al menos un carácter antes del símbolo @.
//@: Coincide con el símbolo @, que es obligatorio en una dirección de correo electrónico.
//No tiene caso saberlo de memoria. Basta saber que esto valida el formato email.

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
}

// Valida si la contraseña tiene 8 caracteres y que contenga al menos un número.

export function validatePassword(password) {
    const hasMinimumLength = password.length >= 8;
    const hasNumber = /\d/.test(password);

    return hasMinimumLength && hasNumber;
}

// Guarda en localStorage que el usuario ha iniciado sesión satisfactoriamente.

export function loginUser() {
    localStorage.setItem('isLoggedIn', 'true');
}

// Elimina la sesión de localStorage al cerrar sesión.

export function logoutUser() {
    localStorage.removeItem('isLoggedIn');
}

//Comprueba si el usuario tiene una sesión activa.

export function isAuthenticated() {
    return localStorage.getItem('isLoggedIn') === 'true';
}
