export const numberToPercent = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }

  // Multiply by 100 to get the percentage value
  const percent = number * 100;

  // Round the percentage to two decimal places
  return percent.toFixed(2) + '%';
};
