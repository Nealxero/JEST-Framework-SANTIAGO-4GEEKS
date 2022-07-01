// Write your function here
var obj = {
    key: ['It', 'has', 'some', 'words']
  };

getOddLengthWordsAtProperty = (obj, key) => {
   
    if (obj[key].length === 0){
        return [];
    }

    if (obj[key].length % 2 === 0){
        return [];
    }

    if (Array.isArray(obj[key]) === false) {
        return [];
    }

    if (obj[key] === undefined) {
        return [];
    }
    
    var result = obj[key].filter(function(element) {
        return element.length % 2 > 0;
      });
      
      return result;
    }


