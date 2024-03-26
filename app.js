// Definición de tareas // estados
const tasks = [
    { name: "Hacer la compra", completed: false },
    { name: "Estudiar para el examen", completed: true },
    { name: "Llamar al cliente", completed: false },
    { name: "Preparar la presentación", completed: false },
    { name: "Ir al gimnasio", completed: true },
    { name: "Terminar el informe", completed: false },
    { name: "Limpiar la casa", completed: true },
    { name: "Resolver los bugs del software", completed: false },
    { name: "Enviar el correo electrónico", completed: false },
    { name: "Organizar el armario", completed: true }
];

// Función para agregar las tareas al DOM
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    let completedTasks = 0;
    tasks.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    });


    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });
        taskItem.appendChild(taskName);
        taskItem.appendChild(checkbox); // Colocar el checkbox después del span
        taskList.appendChild(taskItem);

        if (task.completed) {
            completedTasks++;
            
        }
        if (task.completed) {
            taskName.style.textDecoration = "line-through"; // Tacha el texto si la tarea está completada
            taskName.style.opacity = "0.5";

        }
    });


    const completedTasksCount = document.getElementById("completed-tasks");
    completedTasksCount.textContent = completedTasks;
    const pendingTasksCount = document.getElementById("pending-tasks");
    pendingTasksCount.textContent = tasks.length - completedTasks;
}

// Inicializar la aplicación
renderTasks();