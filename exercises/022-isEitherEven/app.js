isEitherEven = (a, b) => {
    if  ((a %2 === 0 || b % 2 > 0)) return true;
    else return false;
 }
 console.log(isEitherEven(3,6));