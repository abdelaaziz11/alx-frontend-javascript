export const weakMap = new weakMap();
export default function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error(`Endpoint load is high`);
  } else {
      weakMap.set(endpoint, count);
  }
}