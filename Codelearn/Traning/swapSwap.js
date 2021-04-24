function swapSwap(a,b){
    if(a === b) return 0;
    if(a.length !== b.length) return -1;

    let count = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] != b[i]) count++;
    }

    return count >= 2 ? Math.ceil(count / 2): -1;
}
