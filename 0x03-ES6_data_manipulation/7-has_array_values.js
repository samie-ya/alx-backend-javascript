export default function hasValuesFromArray(newSet, array) {
  let total = 0;
  for (const element of array) {
    if (newSet.has(element)) {
      total += 1;
    } else {
      total -= 1;
    }
  }
  if (total === array.length) {
    return true;
  }
  return false;
}
