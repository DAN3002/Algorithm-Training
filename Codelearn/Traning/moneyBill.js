function moneyBill(n){
    if(n < 50) return n * 100;
    else if(n < 1000) return n * 500;
    else if(n < 10000) return n * 10000;
    return n * 1200;
}