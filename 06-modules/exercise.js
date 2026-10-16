// 06-modules — your work goes in this file, and in one you create yourself.
//
// Read 06-modules/README.md first, then read catalog.js, then run:
//   node 06-modules/example.js
// Check your work with: npm test 06

import shopName, { products, formatEGP } from "./catalog.js";

/**
 * How many products the catalog has.
 * productCount() -> 4
 *
 * @returns {number}
 */
export function productCount() {
  return products.length;
}

/**
 * A price tag for one product.
 * priceTag({ name: "Notebook", price: 45 }) -> "45 EGP"
 *
 * @param {object} product
 * @returns {string}
 */
export function priceTag(product) {
  return formatEGP(product.price);
}

/**
 * A heading for the catalog page.
 * shopHeading() -> "GIU Campus Store catalog"
 *
 * @returns {string}
 */
export function shopHeading() {
  return `${shopName} catalog`;
}