export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const idx of arr) {
    const value = appendString + idx;
    const index = arr.indexOf(idx);
    if (index !== -1) {
      arr[index] = value;
    }
  }

  return arr;
}
