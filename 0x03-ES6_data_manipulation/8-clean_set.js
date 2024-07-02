export default function cleanSet(set, startString) {
  const res = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return res.join('-');
}