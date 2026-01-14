document.addEventListener("DOMContentLoaded", function () {

  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");

  addBtn.addEventListener("click", addTask);

  function addTask() {
    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.textContent = taskInput.value;
    delBtn.textContent = "X";

    delBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }

});
