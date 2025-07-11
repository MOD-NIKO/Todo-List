function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = () => li.remove();
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}
