function equalArray(a,b){
    return solve(a,b) || solve(b,a);
}
 
function solve(a,b) {    
    const count = new Map();
 
    for(const i of a) {
        count.set(i, (count.get(i) || 0) + 1);
    }
 
    for(const i of b) {
        count.set(i, (count.get(i) || 0) - 1)
    }
 
    for(const [key, el] of count.entries()) {
        if(el < 0) return false;
    }
 
    return true;
}