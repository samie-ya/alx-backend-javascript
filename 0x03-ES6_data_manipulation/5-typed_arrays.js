export default function createInt8TypedArray(length, position, value) {
  const message = 'Position outside range'; // eslint-disable-line no-unused-vars
  const array = new ArrayBuffer(length);
  const val = new DataView(array);
  try {
    val.setInt8(position, value);
  } catch (e) {
    throw new Error(message);
  }
  return val;
}
