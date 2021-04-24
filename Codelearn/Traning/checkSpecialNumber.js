function checkSpecialNumber(n){
    n = n + "";
    // if(n.length > 9) return false;
    return (new Set([...n])).size == n.length;
}
