var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
   
  

  if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0 || obj[key].length % 2 === 0) {
    return [];
  }
 
  
    var result = obj[key].filter(function(value) {
      return value % 2 > 0;
    });
    
    return result;
  }


var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]