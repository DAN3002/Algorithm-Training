function segmentCode(s,n,k){
    while(k > 0){
        s = encode(s, n);
        k--;
    }
    return s;
}
 
function encode(str, n){
    if(str.length % n != 0) return str;
 
    let out = Array(n).fill("");
 
    for(let i = 0; i < str.length; i++){
        out[i % n] += str[i];
    }
    console.log(out);
    return out.join("");
}