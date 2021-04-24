function rounding(n, m){
    if(n == 1) return 0;
    if(m % n == 0) return n;
    let x1 = (Math.floor(n/m))*m;
    let x2 = (Math.ceil(n/m))*m;

    if(Math.abs(n - x2) == Math.abs(n- x1)) return n;
    if(Math.abs(n - x2) > Math.abs(n- x1)) return x1;
    return x2;
}

