function patientReach(arr){
    let n = arr.length;
    let sum = arr.reduce((a,b) => a+b, 0);
 
    let gcd = GCD(sum, n);
    return [sum/gcd, n/gcd];
}
 
function GCD(a,b){
    return !b ? a : GCD(b, a%b);
}