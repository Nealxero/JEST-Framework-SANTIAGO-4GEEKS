function filterOddElements(arr) {
  // your code here
  
  let oddEle = arr.filter((x) => x % 2 > 0)
  return oddEle
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]