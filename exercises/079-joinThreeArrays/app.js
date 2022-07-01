function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  arr = arr1.concat(arr2, arr3);
  return arr 
}
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(arr); // --> [1, 2, 3, 4, 5, 6]