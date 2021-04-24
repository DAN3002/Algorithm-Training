const int MOD = 1e9 + 7;
int sumSpecialNumber(int n, int k)
{
    int res = 0;
    int power_basen = 1;
    int power_base2 = 1;
    for (int i = 0; i < k - 2; i++) power_base2 = power_base2 * 2 % MOD;
    for (int i = 0; i <= k - 2; i++) {
        int val = 1LL * power_basen * power_base2 % MOD;
        res = (res + val) % MOD;
        power_basen = 1LL * power_basen * n % MOD;
    }
    return res;
}
