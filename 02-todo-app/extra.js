// Dont follow this approach, follow that function wala method
// This is messy :)

const form = document.querySelector("form");
const adddbtn = document.querySelector("#addbtn");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
let todoArr = [];

window.addEventListener("DOMContentLoaded", () => {
  const restoredData = localStorage.getItem("todo");
  if (restoredData) {
    todoArr = JSON.parse(restoredData);
  }

  if (todoArr != null) {
    todoArr.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element; // li.textContent = element;
      todoList.appendChild(li);

      const delbtn = document.createElement("button");
      delbtn.textContent = "Delete";
      li.appendChild(delbtn);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      li.appendChild(checkbox);

      delbtn.addEventListener("click", () => {
        li.remove();
        todoArr = todoArr.filter((t) => t !== element);
        localStorage.setItem("todo", JSON.stringify(todoArr));
      });

      checkbox.addEventListener("change", () => {
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
      });
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = todoInput.value;
    todoList.appendChild(li);
    todoArr.push(todoInput.value);
    const textContent = li.textContent;
    todoInput.value = "";

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    li.appendChild(delbtn);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    delbtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    checkbox.addEventListener("change", () => {
      li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    localStorage.setItem("todo", JSON.stringify(todoArr));
  });
});
