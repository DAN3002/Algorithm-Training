function towerSphere(k){
    let count = 1;
    while(k >= Math.pow(count, 2)){
        k -= Math.pow(count, 2);
        count++;
    }
    return k;
}