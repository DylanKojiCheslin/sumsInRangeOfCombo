export function generatePowerSetWithoutEmptySet(array) {
  const result = [];
  for (let i = 1; i < (1 << array.length); i++) {
    let subset = [];
    for (let x = 0; x < array.length; x++){
      if (i & (1 << x)){
        subset.push(array[x]);
      }
    }
    result.push(subset);
  }
  return result;
}
