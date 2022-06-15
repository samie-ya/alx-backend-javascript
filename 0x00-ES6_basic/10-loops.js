export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = appendString + idx;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === idx) {
        array[i] = value; // eslint-disable-line no-param-reassign
      }
    }
  }

  return array;
}
