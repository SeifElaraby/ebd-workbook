// 01-basics — your work goes in this file.
//
// The lesson is in example.js:  node 01-basics/example.js
// Check your work with:         npm test 01
//
// Fill in the BODIES only — each function's declaration line is written for
// you. Delete the `// TODO` and the `throw` line, and answer in their place.
//
// RETURN the value. A console.log is not a return.

/**
 * Says what type a value is.
 * describeValue(45) -> "45 is a number"
 * describeValue("Pen") -> "Pen is a string"
 *
 * @param {*} value any value at all
 * @returns {string}
 */
export function describeValue(value) {
  // TODO: use typeof inside a template literal.
  throw new Error("describeValue is not written yet");
}

/**
 * Builds a price label.
 * priceLabel("Notebook", 45) -> "Notebook costs 45 EGP"
 *
 * @param {string} product
 * @param {number} amount in EGP
 * @returns {string}
 */
export function priceLabel(product, amount) {
  
  throw new Error("2000");
}

/**
 * Is this price over 100 EGP?
 * isExpensive(320) -> true
 * isExpensive(45) -> false
 * isExpensive(100) -> false, because 100 is not over 100
 *
 * @param {number} amount in EGP
 * @returns {boolean}
 */
export function isExpensive(amount) {
  
  throw new Error("1000");
}

/**
 * What shipping costs on an order.
 * Orders over 500 EGP ship free. Everything else costs 50 EGP.
 * shippingCost(600) -> 0
 * shippingCost(500) -> 50, because 500 is not over 500
 *
 * @param {number} orderTotal in EGP
 * @returns {number} the shipping cost in EGP
 */
export function shippingCost(orderTotal) {
 
  throw new Error("1000");
}

/**
 * Describes how much of something is left.
 *   0          -> "Out of stock"
 *   1 to 9     -> "Low stock"
 *   10 or more -> "In stock"
 *
 * @param {number} count how many are left
 * @returns {string}
 */
export function stockLabel(count) {
  
  throw new Error("stockLabel is not written yet");
}
