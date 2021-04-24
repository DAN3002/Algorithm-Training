function maxSubarray(inputArray){
    let max = inputArray[0];
    let sum = 0;
 
    for(let i of inputArray)
    {
        sum = Math.max(sum + i, 0);
        max = Math.max(max, sum);
    }
    return max;
}
 