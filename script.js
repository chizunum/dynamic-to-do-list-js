document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage and display them
  loadTasks();

  // Add task when button is clicked
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText); // By default, it saves to Local Storage
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      } else {
        alert('Please enter a task.');
      }
    }
  });

  // Function to add a task to the DOM and optionally to Local Storage
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    removeButton.onclick = function () {
      taskList.removeChild(li);
      removeFromLocalStorage(taskText);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    if (save) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // Function to load all tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't resave during load
  }

  // Function to remove a task from Local Storage
  function removeFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
