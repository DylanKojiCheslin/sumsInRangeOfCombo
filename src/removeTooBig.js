export function removeTooBig(array, upperLimit, lowerLimit){
  return (array.filter(entry => entry <= upperLimit))
}