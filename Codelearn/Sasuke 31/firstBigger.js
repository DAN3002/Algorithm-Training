function firstBigger(a,b){
    return b %a == 0 ? b+a : Math.ceil(b/a)*a;
}