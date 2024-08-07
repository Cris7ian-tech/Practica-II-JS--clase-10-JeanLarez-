# Script ListaDeTareas
## Practica II JS.

### 1 Definir variables:

Seleccionamos los elementos del DOM (taskInput, addButton, taskList) y los guardamos en variables.

### 2 Asociar un evento de clic al botón "Agregar tarea":

Usamos addButton.addEventListener('click', addTask) para llamar a la función addTask cuando el botón es clicado.

### 3 Función addTask:

Obtener el valor del input: Utilizamos taskInput.value.trim() para obtener y limpiar el texto ingresado por el usuario.
Verificar el texto: Usamos un condicional para asegurarnos de que el texto no esté vacío o compuesto solo por espacios en blanco.
Crear un nuevo elemento <li>: Usamos document.createElement('li') para crear un nuevo elemento de lista.
Asignar el texto de la tarea: Establecemos el contenido del nuevo <li> con listItem.textContent = taskText.
Agregar un evento de clic al <li>: Asociamos un evento de clic al nuevo <li> que eliminará el elemento cuando se haga clic en él.
Agregar el elemento <li> a la lista <ul>: Usamos taskList.appendChild(listItem) para agregar el nuevo elemento a la lista.
Limpiar el contenido del input de tarea: Establecemos taskInput.value = '' para limpiar el input después de agregar la tarea.

### 4 Evento para detectar clics en las tareas de la lista:

Agregamos un evento al <ul> para detectar clics en los elementos <li>. Cuando un <li> es clicado, se elimina del DOM usando event.target.remove().

### 5 Probamos aplicación
Abro el archivo HTML en navegador.
Se ingresan diferentes tareas en el input y damos clic en el botón "Agregar tarea".
Verifico que las tareas se agreguen correctamente a la lista.
Haciendo "clic" en una tarea de la lista generada eliminamos los items.
