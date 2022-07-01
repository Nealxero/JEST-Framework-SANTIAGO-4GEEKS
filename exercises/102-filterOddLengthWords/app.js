function filterOddLengthWords(words) {
    // your code here
    var oddArr = words.filter(function(oddWords){
        if(oddWords.length % 2 > 0){
          return oddWords;
        }
      });
      return oddArr
    }



var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']