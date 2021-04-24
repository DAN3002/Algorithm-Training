function coprimeSum(n){
    if(n == 1) return 1;
 
    let factors = [];
    let sum = 0;
 
    // Find all factor
    for(let i = 2; i <= Math.floor(Math.sqrt(n)) ; i++)
    {
        if(n % i === 0){
            factors.push(i);
            factors.push(n / i);
        }
    }
 
    for(let i = 1; i < n; i++)
    {
        if(factors.every(el => i % el !== 0)) sum += i;
    }
 
    return sum;
}
 