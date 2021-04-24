function numberFavourite(a){
    let n = a[0];
    if(a[2] % a[1] == 0) return count(n, a[1]);
    if(a[1] % a[2] == 0) return count(n, a[2]);
    return count(n, a[1]) + count(n, a[2]) - count(n, a[1]*a[2]);
}
 
function count(n,a)
{    
    return Math.floor(n / a) + 1;
}
 