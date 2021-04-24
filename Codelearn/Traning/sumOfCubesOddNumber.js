function sumOfCubesOddNumber(n){
    if (n < 2) return -1;

    let sum = 0;
    const mol = 1e9 + 7;
    for(let i = 1; i <= 2*n - 1; i += 2) {
        sum = (sum + (i ** 3) % mol) % mol;
    }

    return sum;
}
