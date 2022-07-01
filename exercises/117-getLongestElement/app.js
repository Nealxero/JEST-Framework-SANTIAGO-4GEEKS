function getLongestElement(arr) {
    // your code here

    if (arr.length === 0){
        return ''
    }
    // ------ this one works (proved) ----
    // longEle = arr.reduce((a, b) => a.length >= b.length ? a : b)
    // return longEle

    let long = arr[0];

    for ( let i = 0; i < arr.length; i++){
        if (long.length < arr[i].length  ){
        long = arr[i]
        }
    }
    return long
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'