const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoLIst();

function renderTodoLIst(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html =
      `<div>${name}</div>
      <div>${dueDate}</div>
       <button class="delete-todo-button">Delete</button>
       </div>`;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-add-todo-button')
  .forEach((deleteButton, index) =>{
    deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoLIst();
      });
  });
  
}
  
function addTodo() {
  const inputElement = document.getElementsByClassName('js-name-input'); 
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoLIst();
}