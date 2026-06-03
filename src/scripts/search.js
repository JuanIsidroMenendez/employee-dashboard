document.addEventListener('keyup', event => {
    if (event.target.matches('#search')) {
        document.querySelectorAll('.employee').forEach(employee => {
            employee.textContent.toLowerCase().includes(event.target.value)
                ? employee.classList.remove('filter')
                : employee.classList.add('filter')
        })
    }
})



//cambiar nombre de card por employee
