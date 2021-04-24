function balancedArray(a){
    return Math.abs(a.slice(0, a.length >> 1).reduce((a,b)=> a+b,0) - a.slice(a.length >> 1).reduce((a,b)=> a+b,0));
}
 