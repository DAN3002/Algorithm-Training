function minSumOfTwoProducts(a,b){ 
    let ans = a*b - a - b + 1;
    let gcd = GCD(a,b);
    return ans % gcd == 0 ? ans : -1;
 
 
}
 
function GCD(a,b){
    return b == 0 ? a : GCD(b, a%b);
}