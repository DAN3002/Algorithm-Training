typedef long long ll;

int veryLargeModulo(string num, int mod) {
    int n = num.size(), pos = 0;
    ll r = 0;
    int *dig = new int[n];
    for (int i = 0; i < n; ++i)
        dig[i] = num[i] - 48;
    while (n - pos > 18)
    {
        ll x = 0;
        while (pos != n && x < 100000000000000000)
        {
            x = x * 10 + dig[pos];
            ++pos;
        }
        x %= mod;
        while (x)
        {
            --pos;
            dig[pos] = x % 10;
            x /= 10;
        }
    }
    while (pos != n)
    {
        r = r * 10 + dig[pos];
        ++pos;
    }
    return int(r % mod);
}
