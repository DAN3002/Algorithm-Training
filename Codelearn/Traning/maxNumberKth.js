function maxNumberKth(n,k){
    n = n.match(/[0-9]+/g)  || [];
    n = n.map(el => parseInt(el));
    n = Array.from(new Set(n));
    n.sort((a,b) => b-a);
    return (n[k-1] || -1) + "";
}
