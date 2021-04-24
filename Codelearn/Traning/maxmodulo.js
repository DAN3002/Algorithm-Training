function maxmodulo(a){
    a = Array.from(new Set(a));
    if(a.length == 1) return 0;
    return a.sort((a,b) => b-a)[1];
}
 