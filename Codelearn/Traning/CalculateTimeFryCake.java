int calculateTimeFryCake(int n, int k)
{
    if(k >= n) return 10;
    n = 2 * n;
    return n % k == 0 ? (n/k)*5 : (n/k + 1)*5;
}
 