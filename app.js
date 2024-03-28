function myTask() {
  const newTaskInput = document.getElementById("newTask");
  const newTask = newTaskInput.value.trim();

  if (newTask !== "") {
    const allTask = document.getElementById("allTask");
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

    const taskName = document.createElement("h3");
    taskName.textContent = newTask;

    const taskActions = document.createElement("div");
    taskActions.classList.add("actions");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", completeTask);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", removeTask);

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(removeBtn);

    taskCard.appendChild(taskName);
    taskCard.appendChild(taskActions);

    allTask.appendChild(taskCard);

    newTaskInput.value = "";
    alert("Congratulations, you added new task!");
  } else {
    alert("Please enter a task!");
  }
}

function completeTask(event) {
  const taskCard = event.target.parentNode.parentNode;
  taskCard.classList.toggle("Completed");
}

function removeTask(event) {
  const taskCard = event.target.parentNode.parentNode;
  taskCard.remove();
}