var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (obj[key].length = 0 || !Array.isArray(obj[key]) || obj[key] === undefined){
      return []
    }
    let smallestEle = obj[key[0]]
    let result = obj[key].sort(function(value) {
      return smallestEle
    });
    
    return result;
  }
  

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1