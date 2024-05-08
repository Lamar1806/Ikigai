const power = (base: number, exponent: number): number => {
  if (exponent === 1) return base;
  return base * power(base, exponent--);
};

console.log(power(2, 2));
