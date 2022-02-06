const todo_list = document.querySelector("#todo-list");
const todo_form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  todo_list.appendChild(li);
}

todo_form.addEventListener("submit", handleTodoSubmit);
