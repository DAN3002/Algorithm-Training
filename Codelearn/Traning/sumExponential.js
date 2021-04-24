function sumExponential(n){
    for(let base = 3; base <= Math.ceil(n/2); base++)
    {
        if(checkBase(n, base)) return base;
    }
    return -1;
}
 
function checkBase(n, base)
{
    if((n - 1) % base == 0) return false;
    let c1 = 0;
    let mod = 0;
    while(n != 0)
    {
        mod = n % base;
        n = Math.floor(n/base);
        if(mod == 1) c1++;
        else if(mod != 0) return false;
    }
    return c1 >= 2;
}
 