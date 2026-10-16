// A named export: other files can import it with { halfPrice }.
export function halfPrice(amount) {
  return amount / 2;
}

// A default export: other files can import it with any name, without braces.
export default "Winter sale";