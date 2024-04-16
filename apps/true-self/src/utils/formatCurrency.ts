export const formatCurrency = (value: number | string): string => {
  // Convert the value to a number if it's a string
  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  // Check if the value is a valid number
  if (isNaN(numberValue)) {
    return 'Invalid value';
  }

  // Use the Intl.NumberFormat object to format the number as currency
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD', // Change the currency as needed
  }).format(numberValue);
};
