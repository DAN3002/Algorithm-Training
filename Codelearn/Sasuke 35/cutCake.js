function cutCake(a,b,c){
    let gcd = GCD(a,b);
    gcd = GCD(gcd,c);
    return gcd;
}
 
function GCD(a,b){
    return b == 0 ? a : GCD(b, a%b);
}