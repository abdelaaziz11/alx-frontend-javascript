export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const val = new DataView(array);
  try {
    val.setInt8(position, value);
  } catch (error) {
    throw Error(`Position outside range`);
  }
  return val;
}
