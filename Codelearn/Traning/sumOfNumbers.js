function sumOfNumbers(arr, n){
    let sum = 0;
    for(let i = 1; i <= n; i++)
    {
        if(arr.some(el => i % el == 0)) sum += i;
    }
    return sum;
}
 