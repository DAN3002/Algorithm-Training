function maxDiff(n,k,a){
    a.sort((a,b) => a-b);
 
    k = Math.min(k, n - k);
 
    let out = 0;
 
    for(let [i, el] of a.entries()){
        if(i < k) out += el;
        else out -= el;
    }
 
    return Math.abs(out);
}