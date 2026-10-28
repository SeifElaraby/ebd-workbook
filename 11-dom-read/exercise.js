// 11-dom-read — your work goes in this file.
//
// See your own page with:     npm run open 11 exercise
// Check your work with:       npm test 11

/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 */
export function pageHeading() {
  return document.querySelector("h1").textContent.trim();
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 * productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
 */
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map((heading) =>
    heading.textContent.trim()
  );
}

/**
 * The price text shown on the card with that name.
 * priceOf("Pen") -> "15 EGP"
 * priceOf("Nothing") -> null, because there is no such card
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find(
    (item) => item.querySelector("h3").textContent.trim() === name
  );
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent.trim();
}

/**
 * The names on the cards that have the class `sold-out`, in page order.
 * soldOutNames() -> ["Backpack", "Calculator"]
 */
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out h3")).map(
    (heading) => heading.textContent.trim()
  );
}