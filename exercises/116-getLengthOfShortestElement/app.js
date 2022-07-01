function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0
    }

    // ------- otra forma(?)-------
    // let shorty = arr.reduce((a, b) => a.length <= b.length ? a : b.)
    //return shorty 

    let shorty = arr[0].length
    for (i = 0; i < arr.length; i++){
        if (arr[i].length < shorty){
        shorty === arr[i].length
        }
        return shorty
    }
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3