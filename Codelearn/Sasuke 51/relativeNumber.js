function relativeNumber(input){
    const [a,b] = input;
 
    return gcd(a,b) === Math.abs(a-b);
}
 
function gcd(a,b) {
    return !b ? a : gcd(b, a%b);
}