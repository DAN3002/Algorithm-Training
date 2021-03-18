function makePrime(n){
    // return getSum(75);
    let old = n;
    while(true)
    {
        let sum = getSum(n);
        if(sum == 0) return n;
        if(sum == old) return -1;
        old = n;
        n = sum;
    }
    return -1;
}

function getSum(n)
{
    let sum = 0;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if(n % i == 0)
        {
            let other = n / i;
            sum += i == other ? i : i + other;
        }
    }
    return sum;
}
