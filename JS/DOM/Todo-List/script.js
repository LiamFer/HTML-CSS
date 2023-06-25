const addBtn = document.getElementById("addBtn");
const tasks = document.getElementById("tasks");
let numberTasks = 0;
let taskAmounts = 0;
let taskNumbers = [];

if (localStorage.length > 0) {
  taskNumbers = localStorage.getItem("Task Numbers").split(",");
  numberTasks = localStorage.getItem("numberTasks");
  document.getElementById("taskAmount").innerText = numberTasks;
  taskNumbers.forEach(function (task,i) {
    let taskName = localStorage.getItem(task);

    const div = document.createElement("div");
    const taskText = document.createElement("p");
    const removeBtn = document.createElement("button");
    const svg =
      '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" /></svg>';

    div.className = "task";
    div.dataset.tasknumber = taskNumbers[i];
    taskText.innerText = taskName;
    removeBtn.innerHTML = svg;
    div.append(taskText, removeBtn);

    removeBtn.addEventListener("click", function () {
      numberTasks--;
      let tasknumber = div.dataset.tasknumber;
      let tasks = localStorage.getItem("Task Numbers").split(",");
      let taskIndex = tasks.indexOf(tasknumber);
      tasks.splice(taskIndex, 1);
      taskNumbers = tasks;
      localStorage.setItem("numberTasks", numberTasks);
      localStorage.setItem("Task Numbers", taskNumbers);
      localStorage.removeItem(tasknumber);
      div.remove();
      document.getElementById("taskAmount").innerText = numberTasks;
    });
    tasks.append(div);
  });
}

addBtn.addEventListener("click", function () {
  const inputTask = document.getElementById("inputTask");
  if (inputTask.value.length === 0) {
    return;
  } else {
    numberTasks++;
    localStorage.setItem("numberTasks", numberTasks);

    taskNumbers.push(numberTasks);
    localStorage.setItem(numberTasks, inputTask.value);
    localStorage.setItem("Task Numbers", taskNumbers);

    document.getElementById("taskAmount").innerText = numberTasks;
    const div = document.createElement("div");
    const taskText = document.createElement("p");
    const removeBtn = document.createElement("button");
    const svg =
      '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" /></svg>';
    div.className = "task";
    div.dataset.tasknumber = numberTasks;
    taskText.innerText = inputTask.value;
    removeBtn.innerHTML = svg;
    div.append(taskText, removeBtn);
    removeBtn.addEventListener("click", function () {
      numberTasks--;
      let tasknumber = div.dataset.tasknumber;
      let tasks = localStorage.getItem("Task Numbers").split(",");
      let taskIndex = tasks.indexOf(tasknumber);
      tasks.splice(taskIndex, 1);
      taskNumbers = tasks;
      localStorage.setItem("numberTasks", numberTasks);
      localStorage.setItem("Task Numbers", taskNumbers);
      localStorage.removeItem(tasknumber);
      div.remove();
      document.getElementById("taskAmount").innerText = numberTasks;
    });
    tasks.append(div);
  }
});
