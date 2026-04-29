let tasks = [];
let idCounter = 1;

function addTask() {
  const name = document.getElementById("taskName").value;
  const priority = document.getElementById("priority").value;
  const isImportant = document.getElementById("important").checked;

  if (name.trim() === "") {
    alert("Task name cannot be empty!");
    return;
  }

  const task = {
    id: idCounter++,
    name: name,
    priority: priority,
    isImportant: isImportant,
    isCompleted: false,
    date: new Date().toLocaleString()
  };

  tasks.push(task);

  console.log(JSON.stringify(tasks));

  document.getElementById("taskName").value = "";
  document.getElementById("important").checked = false;

  renderTasks();
}

function renderTasks() {
  const container = document.getElementById("taskmanager");
  container.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.classList.add("task");

    if (task.priority === "High") div.classList.add("high");
    if (task.priority === "Medium") div.classList.add("medium");
    if (task.priority === "Low") div.classList.add("low");
    if (task.isCompleted) div.classList.add("completed");
    if (task.isImportant) div.classList.add("important");

    div.innerHTML = `
      <div>
        <strong>${task.name}</strong><br>
        Priority: ${task.priority}<br>
        Date: ${task.date}
      </div>

      <div>
        <button onclick="toggleComplete(${task.id})">Done</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    container.appendChild(div);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  console.log(JSON.stringify(tasks));
  renderTasks();
}

function toggleComplete(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.isCompleted = !task.isCompleted;
    }
    return task;
  });

  console.log(JSON.stringify(tasks));
  renderTasks();
}