function linedUp(n){
    return n % 2 == 0 ? Math.pow(3, (n >> 1) - 1)*4 : Math.pow(3, n >> 1) * 2;
}
 