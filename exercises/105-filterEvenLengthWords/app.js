function filterEvenLengthWords(words) {
    // your code here
    var evenArr = words.filter(function(evenWords){
        if(evenWords.length % 2 === 0){
          return evenWords;
        }
      });
      return evenArr
    }


var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']