function decodeString(s){
    let out = s.charAt(s.length - 1);
    for(let i = s.length - 2; i >= 0; i--)
    {
        let c = s.charAt(i);
        let half = Math.floor(out.length / 2);
        out = out.substring(0, half) + c + out.substring(half);
    }
    return out;    
}
 