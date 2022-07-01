function getLengthOfLongestElement(arr) {
    // your code here

    if (arr.length === 0){
        return 0
    }
    let longestString = arr[0];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
          longestString = arr[i];
        }
      }
      return longestString.length;
    }
    


var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5