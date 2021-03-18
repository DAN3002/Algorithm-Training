function appleBox(k){
    let out = 0;
 
    for(let i = 1; i <= k; i++){
        if(i % 2 == 0) out += i*i;
        else out -= i*i;
    }
 
    return out;
}