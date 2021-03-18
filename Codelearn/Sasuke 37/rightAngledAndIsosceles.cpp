bool rightAngledAndIsosceles(long long n)
{
    long long a = floor(sqrt(2*n));
    return a*(a+1)/2 == n;
}