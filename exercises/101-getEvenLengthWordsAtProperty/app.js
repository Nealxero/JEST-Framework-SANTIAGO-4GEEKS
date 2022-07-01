var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
  console.log(key)  
    

  if (Object.keys(obj).length === 0){
    return []
  }

  if (obj[key].length % 2 > 0){
    return []
  }

  if (!Array.isArray(obj[key] === false)){
    return []
  }
  
  var output = obj[key].length % 2 === 0;
  return output
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']