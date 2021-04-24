function isMersennePrime(n){
    if (n <= 0) {
        return false;
    }

    return isPowerOfTwo(n + 1) && isPrime(n);
}

function isPowerOfTwo(n) {
    const log = Math.log2(n);
    return Math.floor(log) === log;
}

function isPrime(n) {
    if(n % 2 == 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n %  i === 0) {
            return false;
        }
    }

    return true;
}
