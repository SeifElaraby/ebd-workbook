// 13-forms — your work goes in this file.
//
// See your own page with:     npm run open 13 exercise
// Check your work with:       npm test 13

/**
 * Reads what is currently typed into the two boxes.
 * readForm() -> { name: "Pen", price: 15 }
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 * renderList([{ name: "Pen", price: 15 }]) puts this inside #list:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 */
export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  });
}

/**
 * Wires up the form so that submitting it adds a product to the list.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");
  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}