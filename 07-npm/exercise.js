// 07-npm — your work goes in this file, and in package.json.
//
// Read 07-npm/README.md first and work through its numbered steps.
// Check your work with: npm test 07

import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 * formatDate("2026-03-15") -> "15/03/2026"
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * The year a date falls in, as a number.
 * yearOf("2026-03-15") -> 2026
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * That many days later, as a string in "YYYY-MM-DD" form.
 * addDays("2026-03-15", 14)  -> "2026-03-29"
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package YOU chose from the registry. Anything except dayjs.
 */
export const myPackage = "lodash";