function smartNumber(n){
    return n.every((el, index) => index == 0 || el < n[index - 1]);
    n = [...n.toString()]
        .map(el => Number(el));
    if(n < 10) return false;
    n = Math.abs(n);
}