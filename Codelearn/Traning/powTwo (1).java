long powTwo(long n) {
    long count = 0;
    while(n != 0)
    {
        n = n / 2;
        count += n;
    }
    return count;    
}