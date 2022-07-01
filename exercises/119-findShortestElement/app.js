function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return ''
    }
    let longEle = arr.reduce((a, b) => a.length <= b.length ? a : b)
    return longEle
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'