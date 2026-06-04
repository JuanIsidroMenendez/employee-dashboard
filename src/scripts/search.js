// src/scripts/search.js

document.addEventListener('keyup', (e) => {
    // 🎯 Nos aseguramos de que el usuario esté escribiendo en el input correcto
    if (e.target.matches('#search')) {
        const query = e.target.value.toLowerCase(); // Convertimos a minúsculas para evitar problemas con mayúsculas
        const employees = document.querySelectorAll('.employee'); // Seleccionamos todas las tarjetas de empleados

        employees.forEach((employee) => {
            // Buscamos el nombre del empleado dentro de su tarjeta (suele estar en el h2)
            const employeeName = employee.querySelector('h2').textContent.toLowerCase();

            if (employeeName.includes(query)) {
                // Si el nombre coincide con lo escrito, le quitamos la clase filter para que se vea
                employee.classList.remove('filter');
            } else {
                // Si NO coincide, le añadimos la clase filter
                employee.classList.add('filter');
            }
        });
    }
});


//cambiar nombre de card por employee
