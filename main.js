import { isAuthenticated, logoutUser } from "./src/scripts/storage.js"; 
import { employeesMock } from './src/scripts/array.js';
import { renderEmployees } from './src/scripts/render.js';
import './src/scripts/search.js'; 

// 🚀 NUEVO IMPORT: Traemos el módulo que acabamos de crear
import { initLogin } from './src/scripts/login.js';

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;
    const isDashboard = pathname.includes('dashboard.html');

    // 🛡️ CASO A: El usuario está en el Dashboard
    if (isDashboard) {
        if (!isAuthenticated()) {
            window.location.href = '../../index.html'; 
        } else {
            renderEmployees(employeesMock);
            
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    logoutUser();
                    window.location.href = '../../index.html';
                });
            }
        }
    } 
    
    // 🔑 CASO B: El usuario está en el Login (index.html)
    else {
        // Ejecutamos la lógica modularizada que está oculta en login.js
        initLogin();
    }
});