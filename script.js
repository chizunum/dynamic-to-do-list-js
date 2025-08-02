<script>
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get and trim the task input value
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add event to remove the task when clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button and list item to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // Add task when Enter key is pressed inside the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Run addTask on page load (not required in this case, but included per instruction)
  addTask();
});
</script>
