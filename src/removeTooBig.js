export function removeTooBig(array, upperLimit){
  return (array.filter(entry => entry <= upperLimit))
}