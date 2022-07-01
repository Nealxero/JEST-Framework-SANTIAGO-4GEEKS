function computeProductOfAllElements(arr) {
    // your code here
    if (arr.length === 0){
        return 0
    }
    let productAvg = arr.reduce((a, b) => a * b);
    return productAvg
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60