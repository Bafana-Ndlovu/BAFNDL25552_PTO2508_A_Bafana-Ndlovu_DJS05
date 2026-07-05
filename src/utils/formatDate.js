/**
 * @function formatDate
 * Converts an ISO date string into a human-readable, localized date string.
 * Example output: "July 7, 2025".
 *
 * @param {string} isoString - A valid ISO 8601 date string (e.g., "2025-07-07T12:34:56Z").
 * @returns {string} Formatted date string in the user's local language and format.
 **/

// Function to format an ISO date string into a readable date
export function formatDate(isoString) {
  const date = new Date(isoString); // Create a Date object from the ISO date string

   // Return the date in a user-friendly format
  // Example: "2026-07-05" → "July 5, 2026"
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
