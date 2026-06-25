const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyState = document.querySelector("#empty-state");

let todos = [
  { text: "Learn render()", completed: false },
];

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  todos.push({ text, completed: false });
  input.value = "";
  render();
});

function render() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.textContent = todo.text;
    item.className = todo.completed ? "completed" : "";
    list.append(item);
  });

  emptyState.hidden = todos.length > 0;
}
