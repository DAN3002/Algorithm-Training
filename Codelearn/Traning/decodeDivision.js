function decodeDivision(s){
    let a = parseInt(s.replace(".", ""));
    let b = Math.pow(10, (s.split(".")[1]).length);
    let gcd = getGCD(a,b);
 
    return [a/gcd, b/gcd];
}
 
function getGCD(a, b) {
    return !b ? a : getGCD(b, a % b);
}