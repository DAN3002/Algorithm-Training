function sphereTower(k){
    let count = 1;
    while(k >= count) {
        k -= count;
        count++;
    }
    return k;
}