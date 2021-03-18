long powNumber(long n, long b) {
    long min = -1;
    for(int i = 2; i <= b; i++)
    {
        int count = 0;
        for (; b % i == 0; b /= i) count++;
        if(count != 0)
        {
            long cal = powPrime(n, i);
            min = min == -1 ? cal / count : Math.min(min, cal / count);
        }
    }
    return min;
}
 
long powPrime(long n, long k) {
    long count = 0;
    while(n != 0)
    {
        n = n / k;
        count += n;
    }
    return count;    
}
 
 