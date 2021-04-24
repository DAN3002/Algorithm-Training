function roundSqrt(n){
    if(n <= 0) return -n;
    return Math.pow(Math.ceil(Math.sqrt(n)), 2) - n;
}
 