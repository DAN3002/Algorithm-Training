function refillPhoneBattery(n,m){
    let a = getMinute(n);    
    while (m >= a) {
        n++;
        m -= a;

        a = getMinute(n);
    }

    return Math.min(n, 100);
}

function getMinute(n) {
    if(n < 30) return 5;
    if(n < 50) return 4;
    if(n < 90) return 2;
    return 3;
}
