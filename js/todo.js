const todo_list = document.querySelector("#todo-list");
const todo_form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", DeleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todo_list.appendChild(li);
}

function DeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

todo_form.addEventListener("submit", handleTodoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) {
  const parseToDos = JSON.parse(saveToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintTodo);
}
