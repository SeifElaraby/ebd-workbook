import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("stock-line");
    li.textContent = item.name;
    ul.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}