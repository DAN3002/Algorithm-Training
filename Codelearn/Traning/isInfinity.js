function isInfinity(n){
    while(n % 5 == 0)
    {
        n /= 5;
    }
    return !isPowerOfTwo(n);
}

function isPowerOfTwo(n){
    return Math.log2(n) % 1 === 0;
}
