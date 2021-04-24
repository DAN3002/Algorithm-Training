function specialPolynomial(x, n){    
    let old = x;
    let k = 0;
    let sum = x + 1;
    while(sum <= n)
    {
        old *= x;
        sum += old;
        k++;
    }
    return k;
}
 