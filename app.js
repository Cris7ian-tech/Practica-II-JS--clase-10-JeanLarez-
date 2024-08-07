// Definir variables para elementos del DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Asocia evento de clic a botón "Agregar tarea"(función addTask)
addButton.addEventListener('click', addTask);

// Función (agregar tarea)
function addTask() {
    // Obtener el valor del input tarea
    const taskText = taskInput.value.trim();

    // Verificar si el texto ingresado no está vacío 
    if (taskText !== '') {
        // Crear un nuevo elemento de lista <li>
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Agregar el nuevo elemento <li> a la lista <ul>
        taskList.appendChild(listItem);

        // Limpiar el contenido del input de tarea
        taskInput.value = '';
    }
}

// Evento detectar clics en tareas de la lista
taskList.addEventListener('click', function(event) {
    // Verificar si elemento clicado es un <li>
    if (event.target.tagName === 'LI') {
        // Eliminar el elemento <li> 
        event.target.remove();
    }
});