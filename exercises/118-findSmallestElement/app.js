function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return 0
    }
    let longEle = arr.reduce((a, b) => a <= b ? a : b)
    return longEle
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1