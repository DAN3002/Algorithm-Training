function minTaxi(n,a){
    let f = Array(5).fill(0);
    for(let i of a) f[i]++;
 
    let count = f[4];
    f[4] = 0;
    let min13 = Math.min(f[1], f[3]);
    count += min13;
    f[1] -= min13; f[3] -= min13;
    count += Math.floor(f[2] / 2);
    f[2] %= 2;
 
    if(f[1] != 0 && f[2] == 1) {
        count += 1;
        f[2] = 0;
        f[1] -= Math.min(2, f[1]);
    }
 
    f[1] = Math.ceil(f[1] / 4);
 
    return count += f.reduce((a,b) => a+b);
}