function maxMod(a){
    a = Array.from(new Set(a)).sort((a,b) => b-a);
    if(a.length < 2) return 0;
    return a[1];
}
 