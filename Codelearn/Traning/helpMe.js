function helpMe(n,m){
    let count = 0;
    while(m > n)
    {
        m = m % 2 == 0 ? m/2 : m + 1;
    }
        count++;
    return count + (n-m);
}