function symmetricNumber(n){
    let re = reverse(n);
    n += re;
    re = reverse(n);
    while(re != n){
        n += re;
        re = reverse(n);
    }
 
    return n;
}
 
function reverse(n){
    n = [...n.toString()].reverse().join("");
    return parseInt(n);
}