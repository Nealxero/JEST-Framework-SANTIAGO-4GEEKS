function getAverageOfElementsAtProperty(obj, key) {

  if (Array.isArray(obj[key] === false)) {
    return 0
  }
  if (obj[key] === undefined){
    return 0
  }
  if (obj[key].length === undefined){
    return 0
  }
  const avg = obj[key].reduce((a,b) => a + b, 0) / obj[key].length;
  return avg

  // your code here
}
var obj = {
  key: [1, 2, 3]
};
let res = getAverageOfElementsAtProperty(obj, 'key');
console.log(res)




