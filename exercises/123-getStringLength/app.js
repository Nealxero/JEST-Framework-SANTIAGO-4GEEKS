function getStringLength(string) {
    // your code here

    return string ? 1 + getStringLength(string.slice(1)) : 0;
}


var output = getStringLength('hello');
console.log(output); // --> 5