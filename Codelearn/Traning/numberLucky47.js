function numberLucky47(n){
    for(let i = 0; i <= Math.floor(n / 7); i++)
    {
        if((n - i*7) % 4 == 0) return true;
    }
    return false;
}
 