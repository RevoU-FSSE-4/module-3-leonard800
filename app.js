const taskList = document.getElementById('taskList');
const newTask = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const allTask = document.getElementById('allTask');

async function fetchData() {
  try {
    const responses = await Promise.all([
      fetch("https://module3-api-is2m.onrender.com/random-todos"),
      fetch("https://module3-api-is2m.onrender.com/random-todos"),
      fetch("https://module3-api-is2m.onrender.com/random-todos")
    ]);

    const taskData = await Promise.all(responses.map(response => response.json()));

    for (const data of taskData) {
      const listItem = addTask(data);
      taskList.appendChild(listItem);
    }
  } catch (error) {
    const errorMsg = document.createElement("P");
    errorMsg.textContent = "Technical Failure!";
    errorMsg.style.backgroundColor = 'red';
    newTask.appendChild(errorMsg);
  }
}

function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', completeTask.bind(null, taskItem));

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', removeTask.bind(null, taskItem));

  taskItem.appendChild(completeBtn);
  taskItem.appendChild(removeBtn);

  return taskItem;
}

function completeTask(taskItem) {
  taskItem.classList.toggle('completed');
  if (taskItem.classList.contains('completed')) {
    taskItem.style.backgroundColor = 'green';
  } else {
    taskItem.style.backgroundColor = '';
  }
}

function removeTask(taskItem) {
  taskItem.remove();
}

addTaskBtn.addEventListener('click', addTask);

newTask.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

fetchData();