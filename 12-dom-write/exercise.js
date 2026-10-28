// 12-dom-write — your work goes in this file.
//
// See your own page with:     npm run open 12 exercise
// Check your work with:       npm test 12

// Finds the card whose h3 says `name`. Gives undefined if there is none.
function findCard(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  return cards.find(
    (card) => card.querySelector("h3").textContent.trim() === name
  );
}

/**
 * Adds one product card to the end of the list.
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(heading, priceTag);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 */
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out. Does nothing if there is none.
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list, leaving it empty.
 */
export function clearProducts() {
  document.querySelectorAll(".card").forEach((card) => card.remove());
}

/**
 * Clicking #add adds a "Notebook" card priced 45.
 * Clicking #reset empties the list.
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}