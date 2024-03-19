export function formatCurrency(
  amount: number,
  currencyCode: string = 'USD'
): string {
  try {
    // Use Intl.NumberFormat to format the number into the user's local currency
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
    });

    // Format the amount into the specified currency
    return formatter.format(amount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return 'N/A'; // Return a placeholder value in case of error
  }
}
