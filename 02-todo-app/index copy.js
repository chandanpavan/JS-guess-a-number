const form = document.querySelector("form");
const addbtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function renderTodos(todo) {
  const li = document.createElement("li");
  li.textContent = todo.text;
  todoList.append(li);

  const delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  li.appendChild(delbtn);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  delbtn.addEventListener("click", () => {
    li.remove(); // new thing --> take this on note and also abt the local Storage .
    todos = todos.filter((t) => t !== todo);
    saveTodos();
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
      todo.completed = true;
    } else {
      li.style.textDecoration = "none";
      todo.completed = false;
    }
    saveTodos();
  });

  if (todo.completed) {
    checkbox.checked = true;
    li.style.textDecoration = "line-through";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = todoInput.value.trim();
  if (todo === "") {
    return;
  }

  const newTodo = {
    text: todo,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos();

  renderTodos(newTodo);

  todoInput.value = "";
});

window.addEventListener("DOMContentLoaded", () => {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }

  todos.forEach((todo) => {
    renderTodos(todo);
  });
});
