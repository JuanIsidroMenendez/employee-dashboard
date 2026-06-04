import { isAuthenticated, logoutUser } from "./src/scripts/auth.js"; 
import { employeesMock } from './src/scripts/array.js';
import { renderEmployees } from './src/scripts/render.js';
import './src/scripts/search.js'; 

document.addEventListener('DOMContentLoaded', () => {
    // 🔍 Identificamos en qué página se encuentra el usuario en este momento
    const pathname = window.location.pathname;
    const isDashboard = pathname.includes('dashboard.html');

    // 🛡️ CASO A: El usuario está intentando ver el Dashboard
    if (isDashboard) {
        if (!isAuthenticated()) {
            // Si NO está logueado, lo expulsamos subiendo dos niveles hacia la raíz
            window.location.href = '../../index.html'; 
        } else {
            // Si SÍ está logueado, pintamos los empleados pasándole tu mock
            renderEmployees(employeesMock);
            
            // 🚪 Escuchamos el botón de cerrar sesión (ya que estamos en el Dashboard)
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    logoutUser();
                    window.location.href = '../../index.html'; // Al salir, vuelve a la raíz
                });
            }
        }
    }
    
    // 🔑 CASO B: El usuario está en el Login (index.html de la raíz)
    // Aquí no lo expulsamos si no está logueado, ¡al revés, dejamos que ponga sus datos!
});