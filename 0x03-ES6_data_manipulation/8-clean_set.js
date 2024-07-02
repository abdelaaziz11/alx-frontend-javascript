export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  let res = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      res.push(value.substring(startString.length));
    }
  });
  return res.join('-');
}