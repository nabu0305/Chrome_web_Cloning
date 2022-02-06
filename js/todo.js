const todo_list = document.querySelector("#todo-list");
const todo_form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

const toDos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", DeleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  todo_list.appendChild(li);
}

function DeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

todo_form.addEventListener("submit", handleTodoSubmit);
