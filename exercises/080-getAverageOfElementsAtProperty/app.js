// Write your function herevar 
let total = 0
let length = 0
var obj = {
  key: [1, 2, 3],
  
}

getAverageOfElementsAtProperty  = (key, obj) => {
      for (var key in obj) {
        total += obj[key];
        length++;
    }
}
    var getAverageOfElementsAtProperty = total / length;
  
   
      