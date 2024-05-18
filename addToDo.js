//Definir las variables necesarias

const form = document.querySelector('.form');
const taskInput = document.querySelector('.enterTask');
const taskKey = 'tasks';


// Evento para agregar una tarea
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clase para crear una tarea
    class Task {
        constructor(name) {
            this.name = name;
            this.completed = false;
            this.id = new Date().getTime();
        }
    }

    const taskName = taskInput.value;
    

    if (!taskName) {
        alert('Debes ingresar una tarea');
        return;
    }

    // Obtener la lista de tareas existentes
    const toDoList = obtenerTareas();
    // Verificar si la tarea ya existe
    if (toDoList.some(task => task.name === taskName)) {
        alert('La tarea ya existe');
        taskInput.value = '';
        return;
    }

    // Crear una nueva tarea y agregarla a la lista
    const task = new Task(taskName);
    toDoList.push(task);

    // Guardar la lista de tareas actualizada en el local storage
    localStorage.setItem(taskKey, JSON.stringify(toDoList));

    // Limpiar el campo de entrada y mostrar un mensaje de éxito
    taskInput.value = '';
    alert('Tarea agregada');
    console.log(toDoList);
});

// Función para obtener la lista de tareas
export const obtenerTareas = () => {
    const tasksList = localStorage.getItem(taskKey);
    if (!tasksList) {
        return [];
    }
    return JSON.parse(tasksList);
};




