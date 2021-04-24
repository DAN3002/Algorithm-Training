function isSpecialPrime(n){
    if (n==0) return false;
    do{
        n=Math.floor(n/10);
        for (let i=2;i*i<=n;i++)
            if (n%i==0) return false;
    } while (n>0);
    return true;
}
