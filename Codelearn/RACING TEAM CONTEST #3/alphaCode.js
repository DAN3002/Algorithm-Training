function alphaCode(s){
    s = [...s.toString()].map(el => parseInt(el));
 
    let f = Array(s.length + 1).fill(0);    
 
    for(let i = 2; i <= s.length; i++){
        let x = s[i-2] * 10 + s[i-1];
        
        if(x <= 26) f[i] = f[i-1] + f[i-2] + 1;
        else f[i] = f[i-1];
    }
 
    return f[s.length] + 1;
}