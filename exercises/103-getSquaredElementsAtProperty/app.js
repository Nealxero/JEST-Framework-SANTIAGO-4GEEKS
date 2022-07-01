var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here

  if (obj[key] === undefined || !Array.isArray(obj[key] || obj[key].length === 0)) {
    return []
  }
    const square = obj[key].map(x => x*x);
      return square
    
    }
  
 


var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]