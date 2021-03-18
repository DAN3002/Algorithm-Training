int sumOfOddSquares(int n)
{
    int d = n % 3, mod = 1e9 + 7;
    long long res;
    if (d == 0) {
        res = n / 3;
        res = res * (n + n + 1) % mod;
        res = res * (n + n - 1) % mod;
    }
    else if (d == 1) {
        res = (n + n + 1) / 3;
        res = res * n % mod;
        res = res * (n + n - 1) % mod;
    }
    else {
        res = (n + n - 1) / 3;
        res = res * n % mod;
        res = res * (n + n + 1) % mod;
    }
    return res;
}