export const sortedFields = (directionSort, value) => {
  let field = value.toLowerCase();
  if (directionSort) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  } else {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }
};
