export const isDeepEqual = (obj1: any, obj2: any): boolean => {
  // Check if both objects are of type object
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  // Check if both objects are null
  if (obj1 === null && obj2 === null) {
    return true;
  }

  // Check if only one object is null
  if (obj1 === null || obj2 === null) {
    return false;
  }

  // Check if both objects have the same keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (
    keys1.length !== keys2.length ||
    !keys1.every((key) => keys2.includes(key))
  ) {
    return false;
  }

  // Recursively compare the values of the keys
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!isDeepEqual(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  // If all checks pass, the objects are deeply equal
  return true;
};
