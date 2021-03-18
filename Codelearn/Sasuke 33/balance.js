function balance(arr){
    const [a,b,c,d] = arr;
    if(a + b == c + d) return a + b;
    if(a + c == b + d) return a + c;
    if(a + d == c + b) return a + d;
    if(a == b + c + d) return a;
    if(b == a + c + d) return b;
    if(c == b + a + d) return c;
    if(d == b + c + a) return d;
    return -1;
    // return ( |||| a + d == b + c);
}