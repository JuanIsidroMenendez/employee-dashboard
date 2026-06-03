import { isAuthenticated, logoutUser } from "./src/scripts/auth.js"; 
import { employeesMock } from './src/scripts/array.js';
import { renderEmployees } from './src/scripts/render.js';
import './src/scripts/search.js'; 

// Control de acceso
if (!isAuthenticated()) {
    // Si no está logueado redireccionamos al login
    window.location.href = './index.html'; 
} else {
    // Si si está logueado, renderizamos la lista de empleados
    renderEmployees(employeesMock);
}


