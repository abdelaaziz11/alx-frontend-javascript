export default function updateUniqueItems(map) {
  try {
    map.forEach((name, quantity) => {
      if (quantity === 1) {
        map.set(name, 100);
      }
    });
    return map;
  } catch (error) {
    throw Error(`Cannot process`);
  }
}