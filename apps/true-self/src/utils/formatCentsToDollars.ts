export function formatCentsToDollars(cents: number) {
  // Assuming cents is an integer representing the amount in cents
  const dollars = cents / 100;

  // Return the amount as a fixed decimal (two decimal places) string
  return dollars.toFixed(2);
}
