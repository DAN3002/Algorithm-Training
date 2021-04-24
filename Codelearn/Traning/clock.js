function clock(a, t){
    let h = a[0];
    let m = a[1];
    let s = a[2] + t;

    m += Math.floor(s / 60);
    s %= 60;
    h += Math.floor(m / 60);
    m %= 60;
    h %= 24;
    // if(h === 24) h = 0;
    return [h,m,s];
}
