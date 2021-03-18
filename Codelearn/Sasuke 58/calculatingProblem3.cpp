typedef long long ll;
const int mod = 1e9 + 7;
 
ll fastPow(ll a, int b)
{
    ll res = 1;
    while (b)
    {   
        if (b & 1)
            res = res * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return res;
}
int calculatingProblem3(int n)
{
    ll p = fastPow(4, n), q = fastPow((ll)(n + n + 1), mod - 2);
    return (int)(p * q % mod);
}