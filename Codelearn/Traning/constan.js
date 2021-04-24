function constan(n){
    if(!isPrime(n)) return n;

    let sum = n * (n - 1) / 2;
    let map = Array(n).fill(true);
    let primeSum = 0;
    let fSum = 0;

    for(let i = 2; i < n; i++)
    {
        if(map[i])
        {
            sum -= i;

            let cal = i*(i-1)/2 - primeSum + fSum;
            cal %= i;

            sum += cal;
            fSum += cal;
            primeSum += i;

            for(let j = 2*i; j < n; j += i) map[j] = false;
        }
    }

    return sum % n;
}

function isPrime(n)
{
    if(n <= 1) return false;    
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if(n % i == 0) return false;
    }
    return true;
}
