// Definición de tareas // estados
const tasksList = localStorage.getItem('tasks');
const tasksApp = JSON.parse(tasksList);
console.log(tasksApp);

// Función para agregar las tareas al DOM
export function renderTasks() {
    const taskListApp = document.getElementById("task-list");
    taskListApp.innerHTML = "";
    const tasksList = localStorage.getItem('tasks');
    const tasksApp = JSON.parse(tasksList);

    let completedTasks = 0;
    tasksApp.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    });


    tasksApp.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            tasksApp[index].completed = !tasksApp[index].completed;
            localStorage.setItem('tasks', JSON.stringify(tasksApp));
            renderTasks();
        });
        taskItem.appendChild(taskName);
        taskItem.appendChild(checkbox); // Colocar el checkbox después del span
        taskListApp.appendChild(taskItem);

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
    pendingTasksCount.textContent = tasksApp.length - completedTasks;
}


// Función para obtener la lista de tareas
export const obtenerTareas = () => {
    const tasksList = localStorage.getItem(taskKey);
    if (!tasksList) {
        return [];
    }
    return JSON.parse(tasksList);
};
// // // Inicializar la aplicación
function actualizarPagina() {
    renderTasks();
}
setInterval(actualizarPagina, 1000);

renderTasks();




