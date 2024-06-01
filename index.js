
const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

function createTask() {
  const taskItem = document.createElement('li');
  taskItem.classList.add('toDoAdded');
  const taskInputValue = inputField.value;
  taskItem.textContent = taskInputValue;
  toDoContainer.append(taskItem);
  inputField.value = " ";
}

function checkTask(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle('toDoCompleted');
  }
}



btn.addEventListener('click', createTask);
toDoContainer.addEventListener('click', checkTask);


