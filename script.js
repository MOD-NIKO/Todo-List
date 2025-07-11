// Load tasks from localStorage on page load
window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToList(task.text, task.completed));
};

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTaskToList(taskText, false);
    saveTasks();
    taskInput.value = "";
  }
}

function addTaskToList(text, completed) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) li.classList.add("done");

  li.onclick = function () {
    li.classList.toggle("done");
    saveTasks();
  };

  document.getElementById("taskList").appendChild(li);
}

function saveTasks() {
  const listItems = document.querySelectorAll("#taskList li");
  const tasks = Array.from(listItems).map(li => ({
    text: li.textContent,
    completed: li.classList.contains("done")
  }));

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  localStorage.removeItem("tasks");
}
