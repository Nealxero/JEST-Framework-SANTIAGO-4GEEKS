function computeSumOfAllElements(arr) {
  // your code here
  let longEle = arr.reduce((a, b) => a + b)
  return longEle
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6