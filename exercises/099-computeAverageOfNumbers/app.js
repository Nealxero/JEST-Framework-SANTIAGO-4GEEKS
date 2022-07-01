// Write your function here

const arr = [1,2,3,4,5];

    computeAverageOfNumbers = (arr) => {
    if (arr.length === 0){
        return 0
    }
    
    const avg = arr.reduce((a,b) => a + b, 0) / arr.length;
    return avg
}

