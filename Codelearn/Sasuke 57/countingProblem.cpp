int countingProblem(int a, int m, int n)
{
    int k = n % m, q = n / m, r = 0, fr = 0;
    long long la = a % m;
    while (la <= (long long)(m / 2) * (m / 2))
    {
        int t = (int)floor(sqrt(la));
        if (t == (int)ceil(sqrt(la)))
        {
            if ((m % 2 == 0 && t == m >> 1) || !t)
                fr++, r += (t <= k);
            else
                fr += 2, r += ((t <= k) + (m - t <= k));
        }
        la += m;
    }
    return fr * q + r;
}