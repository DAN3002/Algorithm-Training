function giftSet(a, b, c, d, e, f){
    if(d <= c && d <= b) return Math.max(Math.min(a,d)*e, d*f);
    if(d <= a) return Math.max(d*e, Math.min(c,b)*f);
    let t1 = a*e + Math.min((d-a), Math.min(c,b))*f;
    let t2 = Math.min(c,b)*f + Math.min(a, d - Math.min(c,b))*e;
    return Math.max(t1, t2);
}
