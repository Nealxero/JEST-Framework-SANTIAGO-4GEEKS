function getElementsAfter(array, n) {
  // your code here
  array.slice(n);
  return array.splice(n + 1 )
}