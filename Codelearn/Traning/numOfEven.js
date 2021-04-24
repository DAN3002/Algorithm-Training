function numOfEven(n,k){
    k = k % 2 != 0 ? k * 2 : k;
    return Math.floor(n / k);
}
