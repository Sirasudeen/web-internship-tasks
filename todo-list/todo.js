// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
var x = 0; 
// Add task when the "Add" button is clicked
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

// Create a new task element
function createTaskElement(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <label for="todo-${x}">
            <input id="todo-${x}" class="close-button" type="checkbox">
            <span>${taskText}</span>
            </label>
    `;
    x++;

    // Mark task as done (cross out) when the "Close" button is clicked
    const closeButton = taskItem.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        taskItem.classList.toggle("done");
    });

    return taskItem;
}
