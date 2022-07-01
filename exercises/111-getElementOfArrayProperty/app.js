var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!obj[key].length === 0 || Array.isArray(obj[key] || !obj[key] === undefined)){
        return obj[key][index]
    }
    else return undefined
}
   var output = getElementOfArrayProperty(obj, 'key', 0); 
   console.log(output); // --> 'Jamil'