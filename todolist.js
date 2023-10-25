// VARIABLES
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// EventListener for add Button and Enter key
addTask.addEventListener('click', addTaskToList);
inputTask.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTaskToList();
    }
});

function addTaskToList() {
    if (inputTask.value.trim() === "") {
        alert('PLEASE ENTER A TASK');
    } else {
        let task = document.createElement('div');
        task.classList.add('task');

        let li = document.createElement('li');
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);

        let checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add('checkTask');
        task.appendChild(checkButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-alt"></i>';
        deleteButton.classList.add('deleteTask');
        task.appendChild(deleteButton);

        taskContainer.appendChild(task);
        inputTask.value = "";

        checkButton.addEventListener('click', function() {
            li.style.textDecoration = "line-through";
        });
    }
}

// EventListener for delete buttons (using event delegation)
taskContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('fa-trash-alt')) {
        e.target.parentElement.parentElement.remove(); // Remueve el contenedor de la tarea
    }
});
