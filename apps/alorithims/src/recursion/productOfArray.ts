// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (numbers: number[]) => {
  const array = numbers;

  const helper = (array: number[]) => {
    if (array.length === 0) return 1;
    const number = array.pop();
    return number * helper(number);
  };

  return helper(array);
};

productOfArray([1, 2, 3]);
