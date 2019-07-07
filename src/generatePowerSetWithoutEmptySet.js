export function generatePowerSetWithoutEmptySet(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
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
  const sorted = result.sort((a,b) => reducer(a) - reducer (b));
  return sorted;
}
