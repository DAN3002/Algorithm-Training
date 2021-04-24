function summationTime(a, b){
    a = a.split(":").map(el => parseInt(el));
    b = b.split(":").map(el => parseInt(el));
    for(let i = 2; i >= 0; i--)
    {
        a[i] += b[i];
    }
    if(a[2] >= 60)
    {
        mod = Math.floor(a[2] / 60);
        a[2] = a[2] % 60;
        a[1] += mod;
    }
    if(a[1] >= 60)
    {
        mod = Math.floor(a[1] / 60);
        a[1] = a[1] % 60;
        a[0] += mod;
    }    
    if(a[0] >= 24) a[0] = a[0] % 24;
    a = a.map(el => (el + "").padStart(2, "0"));
    return a.join(":");
}
 