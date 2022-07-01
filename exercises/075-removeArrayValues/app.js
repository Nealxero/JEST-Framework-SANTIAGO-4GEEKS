var obj = {
   a: [1, 3, 4],
   b: 2,
   c: ['hi', 'there']
 }
function removeArrayValues(obj) {//Begin DE FUNCION
 
   // your code here
   for ( var key in obj){//BEGIN DE FOR
      if (Array.isArray(obj[key])){//BEGIN DE IF
         delete obj[key]
         
      }//END DE IF
      
   }// END DE FOR
      return obj 
}//END DE FUNCION
console.log(removeArrayValues(obj));