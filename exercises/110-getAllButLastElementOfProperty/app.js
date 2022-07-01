var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (obj[key].length === 0 || !Array.isArray(obj[key]) || !key ) {
      return []
    }
    /* ---otra forma de hacero ---
    let newObj = obj[key].slice()
    newObj.pop()
    return newObj     */

    var newObj = obj.key.slice(0, obj.key.length - 1);
    return newObj;
}
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]