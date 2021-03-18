function distributeCandy(age){
    const f = Array(age.length).fill(1);
 
    for(let i = 1; i < age.length; i++) {
        if(age[i] > age[i-1]) f[i] = Math.max(f[i], f[i-1] + 1);
    }
 
    for(let i = age.length - 2; i >= 0; i--) {
        if(age[i] > age[i+1]) f[i] = Math.max(f[i], f[i+1] + 1);
    }
    console.log(f);
    return f.reduce((a,b) => a+b, 0);
}