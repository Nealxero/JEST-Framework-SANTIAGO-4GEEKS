function getLargestElement(arr) {
  // your code here
  if (arr.length === 0){
    return 0
  }
  let longEle = arr.reduce((a, b) => a >= b ? a : b)
  return longEle
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;