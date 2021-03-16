function findNumber(l,r){
    for(let i = l; i <= r; i++){
        if(check(i)) return i;
    }
    return -1;
}
 
function check(n){
    n = n + "";
    return (new Set([...n])).size == n.length;
}