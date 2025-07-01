// Selecciona los elementos del DOM
const agregarBtn = document.getElementById('agregarBtn');
const nuevaTareaInput = document.getElementById('nuevaTarea');
const listaTareas = document.getElementById('listaTareas');

// Evento para el botón agregar
agregarBtn.addEventListener('click', () => {
    const textoTarea = nuevaTareaInput.value.trim();

    if (textoTarea !== '') {
        agregarTarea(textoTarea);
        nuevaTareaInput.value = ''; // limpia el input
    }
});

// Función para agregar una tarea
function agregarTarea(texto) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    // Permitir tachar tarea al hacer clic
    span.addEventListener('click', () => {
        li.classList.toggle('completada');
    });

    // Botón para eliminar tarea
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar-btn');

    btnEliminar.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(btnEliminar);

    listaTareas.appendChild(li);
}
