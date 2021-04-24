function decodeDivision2(s){
    let length = s.indexOf(")") - s.indexOf("(") - 1;
 
    let current = Math.pow(10, s.indexOf("(") - s.indexOf(".") - 1);
    // return current;
    let b = parseInt(s.replace(/[\.()]/g, "")) - parseInt(s.substring(0, s.indexOf("(")).replace(".", ""));
    let a = Math.pow(10, length)*current - current;
    // return a + "-" + b;
    let gcd = GCD(b, a);
    return [b/gcd, a/gcd];
}
 
function GCD(n1,n2)
{
    if(n1<n2) {
        return GCD(n1, n2-n1);
    }
    else if(n2<n1) {
        return GCD(n1-n2,n2);
    }
    else{
        return n1;
    }
}