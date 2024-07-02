export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  let res = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      res.push(value.slice(startString.length));
    }
  });

  return res.join('-');
}