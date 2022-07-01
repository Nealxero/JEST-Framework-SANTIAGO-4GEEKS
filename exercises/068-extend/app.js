var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
   obj1 = Object.assign({},obj2, obj1)
   return obj1
}

console.log(obj1)