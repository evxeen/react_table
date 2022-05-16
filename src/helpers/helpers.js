export const sortedFields = (directionSort, value) => {
  let field = value.toLowerCase();
  return directionSort
    ? (a, b) => (a[field] > b[field] ? 1 : -1)
    : (a, b) => (a[field] < b[field] ? 1 : -1);
};
