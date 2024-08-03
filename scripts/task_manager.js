document.addEventListener('DOMContentLoaded', function() {
    loadTasks();

    document.getElementById('taskForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });
});

function loadTasks() {
    fetch('../server/get_tasks.php')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.innerHTML = `
                    <h4>${task.title}</h4>
                    <p>${task.description}</p>
                    <p>Priority: ${task.priority}</p>
                    <p>Due Date: ${task.due_date}</p>
                    <p>Status: ${task.status}</p>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                `;
                taskList.appendChild(taskElement);
            });
        });
}

function addTask() {
    const formData = new FormData(document.getElementById('taskForm'));

    fetch('../server/add_task.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        loadTasks();
    });
}

function deleteTask(id) {
    fetch(`../server/delete_task.php?id=${id}`, {
        method: 'GET'
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        loadTasks();
    });
}
