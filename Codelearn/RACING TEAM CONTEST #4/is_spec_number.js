function isSpecNumber(n){
    n = Math.abs(n);
    n = [...n.toString()];
    return n[0] == n.slice(-1)[0];
}