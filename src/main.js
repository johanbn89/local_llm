const STORAGE_KEY = "simple-todo-app.todos";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyState = document.querySelector("#empty-state");
const remainingCount = document.querySelector("#remaining-count");
const clearCompletedButton = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll(".filter-button");

let todos = loadTodos();
let currentFilter = "all";

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  todos.unshift({
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now(),
  });

  input.value = "";
  saveAndRender();
});

list.addEventListener("click", (event) => {
  const item = event.target.closest(".todo-item");
  if (!item) return;

  const id = item.dataset.id;

  if (event.target.matches("[data-action='delete']")) {
    todos = todos.filter((todo) => todo.id !== id);
    saveAndRender();
  }
});

list.addEventListener("change", (event) => {
  if (!event.target.matches("[data-action='toggle']")) return;

  const item = event.target.closest(".todo-item");
  const todo = todos.find((entry) => entry.id === item.dataset.id);
  if (!todo) return;

  todo.completed = event.target.checked;
  saveAndRender();
});

list.addEventListener("dblclick", (event) => {
  const textElement = event.target.closest(".todo-text");
  if (!textElement) return;

  startEditing(textElement.closest(".todo-item").dataset.id);
});

list.addEventListener("keydown", (event) => {
  if (!event.target.matches(".edit-input")) return;

  if (event.key === "Enter") {
    commitEdit(event.target);
  }

  if (event.key === "Escape") {
    render();
  }
});

list.addEventListener(
  "blur",
  (event) => {
    if (event.target.matches(".edit-input")) {
      commitEdit(event.target);
    }
  },
  true
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    render();
  });
});

clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveAndRender();
});

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  render();
}

function render() {
  const visibleTodos = getVisibleTodos();
  const activeCount = todos.filter((todo) => !todo.completed).length;

  remainingCount.textContent = activeCount;
  clearCompletedButton.disabled = !todos.some((todo) => todo.completed);

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  });

  list.innerHTML = "";

  visibleTodos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " completed" : ""}`;
    item.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("data-action", "toggle");
    checkbox.setAttribute("aria-label", `Mark ${todo.text} as done`);

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;
    text.title = "Double-click to edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("data-action", "delete");
    deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });

  emptyState.classList.toggle("hidden", visibleTodos.length > 0);
  updateEmptyMessage();
}

function getVisibleTodos() {
  if (currentFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (currentFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

function updateEmptyMessage() {
  if (todos.length === 0) {
    emptyState.textContent = "No tasks yet. Add one above.";
    return;
  }

  emptyState.textContent =
    currentFilter === "completed"
      ? "No completed tasks yet."
      : "No active tasks left.";
}

function startEditing(id) {
  const todo = todos.find((entry) => entry.id === id);
  const item = list.querySelector(`[data-id="${id}"]`);
  const textElement = item?.querySelector(".todo-text");
  if (!todo || !textElement) return;

  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = todo.text;
  editInput.maxLength = 120;
  editInput.dataset.id = id;

  textElement.replaceWith(editInput);
  editInput.focus();
  editInput.select();
}

function commitEdit(editInput) {
  const todo = todos.find((entry) => entry.id === editInput.dataset.id);
  if (!todo) return;

  const nextText = editInput.value.trim();

  if (!nextText) {
    todos = todos.filter((entry) => entry.id !== todo.id);
  } else {
    todo.text = nextText;
  }

  saveAndRender();
}
