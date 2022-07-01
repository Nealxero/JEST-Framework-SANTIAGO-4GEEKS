
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0 || obj[key].length % 2 > 0) {
      return [];
    }
   
    
      var result = obj[key].filter(function(value) {
        return value % 2 === 0;
      });
      
      return result;
    }

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]