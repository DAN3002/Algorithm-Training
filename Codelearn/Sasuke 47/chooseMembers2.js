function choosingMembers(n){
    if(n <= 0) return 0;
 
    let out = 1;
    for(let i = 0; i <= 2; i++) out = out*(n - i);
    return out;
}