const taskList = document.getElementById('taskList');
const newTask = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const allTask = document.getElementById('allTask');

async function fetchData() {
	try {
		//const request = new Request("https://module3-api-is2m.onrender.com/random-todos");
  		const response = await fetch("https://module3-api-is2m.onrender.com/random-todos");
  		const testData = await response.json();
  		console.log("testData :", testData);
  		testData.forEach((task) => {
  			const listItem = addTask(task);
  			console.log("listItem", listItem);
  			taskList.appendChild(listItem);
  		}
  		);
  		//return await response.json();
	}catch (error){
		const errorMsg = document.createElement("P");
		errorMsg.textContent = "Technical Failure!";
		errorMsg.style.backgroundColor = 'red';
		newTask.appendChild(errorMsg);
	}
}

fetchData();

function addTask(taskText) {
  //const taskText = newTask.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', completeTask);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', removeTask.bind(null, taskItem));

    taskItem.appendChild(completeBtn);
    taskItem.appendChild(removeBtn);

    taskList.appendChild(taskItem);
    newTask.value = '';

    alert('Task added successfully!');
  }
}

function completeTask() {
  const taskItem = this.parentNode;
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

//const removeButtons = allTask.querySelectorAll('.actions button:last-child');
//const completeButtons = allTask.querySelectorAll('.actions button:first-child');

//removeButtons.forEach((button) => {
  //const taskItem = button.parentNode.parentNode;
  //button.addEventListener('click', removeTask.bind(null, taskItem));
//});

//completeButtons.forEach((button) => {
  //const taskItem = button.parentNode.parentNode;
  //button.addEventListener('click', completeTask.bind(null, taskItem));
//});