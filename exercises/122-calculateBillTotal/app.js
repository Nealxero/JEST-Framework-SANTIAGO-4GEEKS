function calculateBillTotal(preTaxAndTipAmount) {
    // your code here

        let tip = preTaxAndTipAmount * 0.15;
        let tax = preTaxAndTipAmount * 0.095;
        return preTaxAndTipAmount + tip + tax;
      
    
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9