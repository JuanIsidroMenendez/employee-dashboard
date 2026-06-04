// src/scripts/render.js

export function renderEmployees(employeesList) {
    const gallery = document.getElementById('employee-gallery');

    if (!gallery) return; // Si la galería o contenedor no existe, se detiene la función para evitar errores.

    // Saneamos el contenedor y mapeamos los empleados
    gallery.innerHTML = employeesList.map(employee => `
        <article class="employee">
            <img src="${employee.avatar}" alt="${employee.name}">
            <h2>${employee.name}</h2>
        </article>
    `).join('');
}