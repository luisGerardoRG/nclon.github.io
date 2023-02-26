const inputs = document.querySelectorAll('form .campo input');

inputs.forEach(input => {
    input.addEventListener('blur', validarinput)
});

inputs.forEach(input => {
    input.addEventListener('input', validarinput)
});

function validarInput(e) {
    const estado = ['valido', 'no-valido'];

    let clase;
    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }


    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('este campo no es obligatorio'));
            errorDiv.classList.add('alerta');

            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] == 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}