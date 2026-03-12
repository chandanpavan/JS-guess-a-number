const form = document.querySelector("form");
const addbtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value === "") {
    return;
  }

  const todo = todoInput.value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const li = document.createElement("li");
  const delbtn = document.createElement("button");

  todos.push(todo);
  saveTodos();
  delbtn.textContent = "delete";

  checkbox.addEventListener("click", () => {
    li.innerHTML = `<strike>${todo}</strike>  (Completed)`;
  });

  delbtn.addEventListener("click", () => {
    li.removeChild(delbtn);
    todoList.removeChild(li);
  });

  // li.textContent = todo;
  li.innerHTML = `${todo}`;
  todoList.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(delbtn);

  todoInput.value = "";
});

window.addEventListener("DOMContentLoaded", () => {
  //   function loadTodos() {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }

  todoList.appendChild(todos);
  // }
});
