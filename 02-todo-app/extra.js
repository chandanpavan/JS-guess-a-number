const todos = document.querySelector("#todo-list");
const adddbtn = document.querySelector(".addbtn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
let todoArr = [];

window.addEventListener("DOMContentLoaded", () => {
  const restoredData = localStorage.getItem("todo");
  if (restoredData) {
    todoArr = JSON.parse(restoredData);
  }

  if (todoArr != null) {
    todoArr.forEach((element) => {
      const todo = document.createElement("li");
      todo.textContent = element;
      todoList.appendChild(todo);

      const delbtn = document.createElement("button");
      delbtn.textContent = "Delete";
      todo.appendChild(delbtn);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      todo.appendChild(checkbox);

      delbtn.addEventListener("click", () => {
        todoList.removeChild(todo);
      });
    });
  }

  adddbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const todo = document.createElement("li");
    todo.textContent = todoInput.value;
    todoList.appendChild(todo);
    todoArr.push(todoInput.value);
    const textContent = todo.textContent;

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    todo.appendChild(delbtn);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todo.appendChild(checkbox);

    delbtn.addEventListener("click", () => {
      todoList.removeChild(todo);
    });

    checkbox.addEventListener("click", () => {
      todo.innerHTML = `<strike>${textContent}</strike>`;
    });

    localStorage.setItem("todo", JSON.stringify(todoArr));
  });
});
