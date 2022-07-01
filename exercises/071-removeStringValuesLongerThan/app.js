var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  
  function removeStringValuesLongerThan(num, obj) {
    // your code here
    for ( var key in obj){
    if (num < obj[key].length)
    delete obj[key];
    }
    
}

